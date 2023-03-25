function addToDo() {
    document.getElementById("inputBtn").addEventListener("click", function() {
        const inputBox = document.getElementById("inputValue")
        if(inputBox.value == "" || inputBox.value == null) {
            alert("Üngültige Eingabe")
        } else {
            document.getElementById("todos").style.display = "block" 
            const divToAppend = document.getElementById("todos")

            const newDiv = document.createElement("div")
            newDiv.id = "todo"
            
            const doneBtn = document.createElement("button")
            doneBtn.className = "material-symbols-outlined"
            doneBtn.id = "ToDoDone"
            doneBtn.innerText = "done"
            newDiv.appendChild(doneBtn)

            const taskField = document.createElement("button")
            taskField.disabled = true
            taskField.id = "ToDoText"
            taskField.innerText = inputBox.value
            newDiv.appendChild(taskField)

            divToAppend.appendChild(newDiv)
            inputBox.value = ""
            
            document.getElementById("ToDoDone").addEventListener("click", function() {
                document.getElementById("ToDoDone").parentElement.style.display = "none"
            })
        }
    })
}

function addToDoWithDB() {
    let db
    const dbName = "toDoStorage"
    const objectStoreName = "objectStoreName"

    const request = indexedDB.open(dbName, 1);
    request.onsuccess = function(event) {
        db = event.target.result
    }

    request.onupgradeneeded = function(event) {
        const db = event.target.result
        const store = db.createObjectstore(objectStoreName, { keyPath: "id" })
    }

    document.getElementById("inputBtn").addEventListener("click", function() {
        const inputBox = document.getElementById("inputValue")
        if(inputBox.value == "" || inputBox.value == null) {
            alert("Üngültige Eingabe")
        } else {
            const newData = {id: 1, "addedTask": inputBox.value}
            const dataTransaction = db.transaction([objectStoreName], "readwrite")
            const objectStore = transaction.objectStore(objectStoreName)
            const addRequest = object.add(data)
            displayDataOnLoad()
        }
    })
}

function displayDataOnLoad() {
    const displayTransaction = db.transaction([objectStoreName], "readonly")
    const displayObjectStore = dataTransaction.objectStore(objectStoreName)
    const getAllRequests = displayObjectStore.getAll()

    getAllRequests.onsuccess = function(event) {
        const data = event.target.result

        data.forEach(function(item) {
            document.getElementById("todos").style.display = "block" 
            const divToAppend = document.getElementById("todos")

            const newDiv = document.createElement("div")
            newDiv.id = "todo"
            
            const doneBtn = document.createElement("button")
            doneBtn.className = "material-symbols-outlined"
            doneBtn.id = "ToDoDone"
            doneBtn.innerText = "done"
            newDiv.appendChild(doneBtn)

            const taskField = document.createElement("button")
            taskField.disabled = true
            taskField.id = "ToDoText"
            taskField.innerText = inputBox.value
            newDiv.appendChild(taskField)

            divToAppend.appendChild(newDiv)
            inputBox.value = ""
            
            document.getElementById("ToDoDone").addEventListener("click", function() {
                document.getElementById("ToDoDone").parentElement.style.display = "none"
            })  
        })
    }
}

window.addEventListener("load", function() {
    this.document.getElementById("todos").style.display = "block"
    addToDoWithDB()
    displayToDoOnLoad()
})