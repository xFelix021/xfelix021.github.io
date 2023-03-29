import sqlite3
import openai

# Connect to the database
conn = sqlite3.connect('chat.db')
cursor = conn.cursor()

# Initialize the OpenAI API with your API key
openai.api_key = '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'

# Define a function to generate a response using the OpenAI API
def generate_response(prompt):
    response = openai.Completion.create(
        engine='davinci',
        prompt=prompt,
        max_tokens=50,
        n=1,
        stop=None,
        temperature=0.5,
    )
    return response.choices[0].text.strip()

# Define a function to handle user messages
def handle_message(text):
    # Check if the message is already in the database
    cursor.execute('SELECT response FROM messages WHERE message=?', (text,))
    row = cursor.fetchone()
    if row is not None:
        return row[0]
    # If the message is not in the database, generate a response using the AI module
    response = generate_response(text)
    # Store the message and response in the database
    cursor.execute('INSERT INTO messages (message, response) VALUES (?, ?)', (text, response))
    conn.commit()
    return response

# Close the database connection when the program exits
def cleanup():
    cursor.close()
    conn.close()

# Initialize the OpenAI API and connect to the database
def initialize():
    try:
        openai.api_key = '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'
        cursor.execute('''CREATE TABLE IF NOT EXISTS messages
                          (id INTEGER PRIMARY KEY AUTOINCREMENT, message TEXT, response TEXT)''')
        conn.commit()
    except Exception as e:
        print(f'Error initializing database: {e}')
        cleanup()
        exit()

initialize()

while True:
    text = input('You: ')
    response = handle_message(text)
    print(f'AI: {response}')

cleanup()