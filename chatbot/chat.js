document.getElementById("chat-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var message = document.getElementById("chat-input").value;
    fetch('/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({message: message})
    })
    .then(response => response.json())
    .then(data => {
      displayMessage('AI', data.response);
    })
    .catch(error => {
      console.error(error);
    });
    document.getElementById("chat-input").value = "";
});
  
document.getElementById("chat-clear").addEventListener("click", function(event) {
    event.preventDefault();
    fetch('/clear')
    .then(response => {
      location.reload();
    })
    .catch(error => {
      console.error(error);
    });
});
  
function displayMessage(sender, message) {
    var bubble = document.createElement('div');
    bubble.classList.add('chat-bubble');
    if (sender === 'AI') {
      bubble.classList.add('chat-bubble-left');
    } else {
      bubble.classList.add('chat-bubble-right');
    }
    bubble.textContent = message;
    document.getElementById('chat-container').appendChild(bubble);
}
  