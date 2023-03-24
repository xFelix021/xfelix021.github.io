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

window.addEventListener("load", function() {
    this.document.getElementById("todos").style.display = "block"
    addToDo()
})