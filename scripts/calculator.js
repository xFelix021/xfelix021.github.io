function calculator() {
    const displayCalculationText = document.getElementById("displayCalculationText")

    const n9 = document.getElementById("9")
    const n8 = document.getElementById("8")
    const n7 = document.getElementById("7")
    const n6 = document.getElementById("6")
    const n5 = document.getElementById("5")
    const n4 = document.getElementById("4")
    const n3 = document.getElementById("3")
    const n2 = document.getElementById("2")
    const n1 = document.getElementById("1")
    const n0 = document.getElementById("n0")
    const comma = document.getElementById("comma")

    const AC = document.getElementById("AC")
    const plusmi = document.getElementById("+-")
    const procent = document.getElementById("%")

    const divide = document.getElementById("/")
    const multiply = document.getElementById("*")
    const minus = document.getElementById("-")
    const plus = document.getElementById("+")
    const equals = document.getElementById("=")

    var operator = null
    var number1 = null
    var number2 = null

    function setNumber(number) {
        if(number1 == null) {
            number1 = number
        } else {
            number2 = number
        }
    }

    function setOperator(setoperator) {
        if(operator == null) {
            operator = setoperator
        }
    }

    function operatorUIEvent() {
        const targetOperatorBtn = document.getElementById(operator)

        divide.style.color = "white", divide.style.backgroundColor = "rgb(255, 114, 33)"
        multiply.style.color = "white", multiply.style.backgroundColor = "rgb(255, 114, 33)"
        minus.style.color = "white", minus.style.backgroundColor = "rgb(255, 114, 33)"
        plus.style.color = "white", plus.style.backgroundColor = "rgb(255, 114, 33)"

        targetOperatorBtn.style.color = "rgb(255, 114, 33)", targetOperatorBtn.style.backgroundColor = "white"
        displayCalculationText.textContent = "\xa0"
    }

    divide.addEventListener("click", function() { setOperator("/"), operatorUIEvent() })
    multiply.addEventListener("click", function() { setOperator("*"), operatorUIEvent() })
    plus.addEventListener("click", function() { setOperator("+"), operatorUIEvent() })
    minus.addEventListener("click", function() { setOperator("-"), operatorUIEvent() })

    n9.addEventListener("click", function() { displayCalculationText.textContent =  displayCalculationText.textContent + "9", setNumber(9)})
    n8.addEventListener("click", function() { displayCalculationText.textContent =  displayCalculationText.textContent + "8", setNumber(8)})
    n7.addEventListener("click", function() { displayCalculationText.textContent =  displayCalculationText.textContent + "7", setNumber(7)})
    n6.addEventListener("click", function() { displayCalculationText.textContent =  displayCalculationText.textContent + "6", setNumber(6)})
    n5.addEventListener("click", function() { displayCalculationText.textContent =  displayCalculationText.textContent + "5", setNumber(5)})
    n4.addEventListener("click", function() { displayCalculationText.textContent =  displayCalculationText.textContent + "4", setNumber(4)})
    n3.addEventListener("click", function() { displayCalculationText.textContent =  displayCalculationText.textContent + "3", setNumber(3)})
    n2.addEventListener("click", function() { displayCalculationText.textContent =  displayCalculationText.textContent + "2", setNumber(2)})
    n1.addEventListener("click", function() { displayCalculationText.textContent =  displayCalculationText.textContent + "1", setNumber(1)})
    n0.addEventListener("click", function() { displayCalculationText.textContent =  displayCalculationText.textContent + "0", setNumber(0)})
    comma.addEventListener("click", function() { displayCalculationText.textContent =  displayCalculationText.textContent + ","})

    AC.addEventListener("click", function() { 
        displayCalculationText.textContent = "\xa0"
        divide.style.color = "white", divide.style.backgroundColor = "rgb(255, 114, 33)"
        multiply.style.color = "white", multiply.style.backgroundColor = "rgb(255, 114, 33)"
        minus.style.color = "white", minus.style.backgroundColor = "rgb(255, 114, 33)"
        plus.style.color = "white", plus.style.backgroundColor = "rgb(255, 114, 33)"

        operator = null
        number1 = 0
        number2 = 0
    })

    procent.addEventListener("click", function() { displayCalculationText.textContent = Number(displayCalculationText.textContent) / 100 })

    plusmi.addEventListener("click", function() {
        displayCalculationText.textContent = Number(displayCalculationText.textContent) * -1
    })

    equals.addEventListener("click", function() {
        if(operator == "+") {
            displayCalculationText.textContent = number1 + number2
            number1 = Number(displayCalculationText.textContent)
        } else if(operator == "-") {
            displayCalculationText.textContent = number1 - number2
            number1 = Number(displayCalculationText.textContent)
        }
        else if(operator == "*") {
            displayCalculationText.textContent = number1 * number2
            number1 = Number(displayCalculationText.textContent)
        }
        else if(operator == "/") {
            displayCalculationText.textContent = number1 / number2
            number1 = Number(displayCalculationText.textContent)
        }
        divide.style.color = "white", divide.style.backgroundColor = "rgb(255, 114, 33)"
        multiply.style.color = "white", multiply.style.backgroundColor = "rgb(255, 114, 33)"
        minus.style.color = "white", minus.style.backgroundColor = "rgb(255, 114, 33)"
        plus.style.color = "white", plus.style.backgroundColor = "rgb(255, 114, 33)"
    })
}

window.addEventListener("load", function() {
    calculator()
})