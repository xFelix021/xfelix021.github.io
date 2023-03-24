function changeCurrency() {
    document.getElementById("moneyPlaceholder").addEventListener("click", function() {
        if(document.getElementById("moneyPlaceholder").textContent == "€") {
            document.getElementById("moneyPlaceholder").innerHTML = "$"
        } else if(document.getElementById("moneyPlaceholder").textContent == "$") {
            document.getElementById("moneyPlaceholder").innerHTML = "€"
        }
    })
}

function tipCalculator() {
    document.getElementById("next1Btn").addEventListener("click", function() {
        if(document.getElementById("billAmount").value == "" || document.getElementById("billAmount").value == null) {
            alert("Kein gültiger Betrag");
        } else {
            document.getElementById("billAmount").disabled = true
            document.getElementById("moneyPlaceholder").disabled = true
            document.getElementById("next1Btn").disabled = true

            document.getElementById("percentageForm").style.display = "flex"

            document.getElementById("next2Btn").addEventListener("click", function() {
                if(document.getElementById("percentageAmount").value == "" || document.getElementById("percentageAmount").value == null) {
                    alert("Keine gültige Prozentzahl");
                } else {
                    var billAmount = Number(document.getElementById("billAmount").value)
                    var percentageAmount = Number(document.getElementById("percentageAmount").value)

                    var percentageOfbill = percentageAmount / 100 * billAmount

                    document.getElementById("displayCurrency").innerHTML = document.getElementById("moneyPlaceholder").textContent
                    document.getElementById("displayAmount").innerHTML = billAmount + document.getElementById("moneyPlaceholder").textContent
                    document.getElementById("displayPercent").innerHTML = percentageAmount + "%"
                    document.getElementById("displayTipAmount").innerHTML = percentageOfbill + document.getElementById("moneyPlaceholder").textContent
                    document.getElementById("displayTotal").innerHTML = (billAmount + percentageOfbill) + document.getElementById("moneyPlaceholder").textContent

                    document.getElementById("displayCalculation").style.display = "block"
                }
            })
        }
    })
}

window.addEventListener("load", function() {
    this.document.getElementById("displayCalculation").style.display = "none"
    this.document.getElementById("percentageForm").style.display = "none"
    changeCurrency()
    tipCalculator()
})