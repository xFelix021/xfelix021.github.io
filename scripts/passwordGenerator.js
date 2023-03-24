function passwordGenerator() {
    const passwordLengthUp = document.getElementById("adjustPasswordLengthUp")
    const passwordLengthDown = document.getElementById("adjustPasswordLengthDown")
    const passwordLengthDisplay = document.getElementById("passwordLengthDisplay")
     
    var passwordLength = 8

    function adjustPasswordLength(type) {
        if(type == "+") {
            passwordLength++
            return
        } else if(type == "-") {
            if(Number(passwordLengthDisplay.textContent) == 8) {
                return
            } else {
                passwordLength--
                return
            }
        }
    }
    passwordLengthUp.addEventListener("click", function() { 
        adjustPasswordLength("+") 
        passwordLengthDisplay.innerText = Number(passwordLength)
    })
    passwordLengthDown.addEventListener("click", function() { 
        adjustPasswordLength("-") 
        passwordLengthDisplay.innerText = Number(passwordLength)
    })

    // Criteria Buttons
    const useSymbolsBtn = document.getElementById("includingSymbols")
    const useUppercaseLettersBtn = document.getElementById("includingUppercaseLetters")
    const useNumbersBtn = document.getElementById("includingNumbers")

    var useSymbols = false
    var useUppercaseLetters = false
    var useNumbers = false

    function setCheckboxValue(element, variable) {
        const targetBtn = document.getElementById(element)

        if(targetBtn.textContent == "done") {
            targetBtn.innerText = ""
            if(variable == "useSymbols") {
                useSymbols = false
            } else if(variable == "useUppercaseLetters") {
                useUppercaseLetters = false
            } else if(variable == "useNumbers") {
                useNumbers = false
            }
            return
        } else if(targetBtn.textContent == "") {
            targetBtn.innerText = "done"
            if(variable == "useSymbols") {
                useSymbols = true
            } else if(variable == "useUppercaseLetters") {
                useUppercaseLetters = true
            } else if(variable == "useNumbers") {
                useNumbers = true
            }
            return
        }
    }
    useSymbolsBtn.addEventListener("click", function() {
        setCheckboxValue("includingSymbols", "useSymbols")
    })
    useUppercaseLettersBtn.addEventListener("click", function() {
        setCheckboxValue("includingUppercaseLetters", "useUppercaseLetters")
    })
    useNumbersBtn.addEventListener("click", function() {
        setCheckboxValue("includingNumbers", "useNumbers")
    })

    // Generate Password
    document.getElementById("generatePassword").addEventListener("click", function() {
        let password = ""
        let charSet = "abcdefghijklmnopqrstuvwxyz"

        if(useUppercaseLetters == true) {
            charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        }
        if(useNumbers == true) {
            charSet += "0123456789"
        }
        if(useSymbols == true) {
            charSet += "!@#$%^&*()_+~`|}{[]:;?><,./-="
        }

        for (let i = 0; i < Number(passwordLengthDisplay.textContent); i++) {
            password += charSet.charAt(Math.floor(Math.random() * charSet.length));
        }
        displayGeneratedPassword.placeholder = password
        document.getElementById("copyPassword").innerText = "content_copy"
        document.getElementById("generatePassword").innerText = "refresh"
    })

    document.getElementById("copyPassword").addEventListener("click", function() {
        const generatedPassword = document.getElementById("displayGeneratedPassword")
        const generatedPasswordValue = generatedPassword.getAttribute("placeholder")

        navigator.clipboard.writeText(generatedPasswordValue)
    })
}

window.addEventListener("load", function() {
    passwordGenerator()
})