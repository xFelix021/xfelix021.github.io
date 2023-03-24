function currencyHandler() {
    const fromCurrencyForm = document.getElementById("selectCurrency")
    const toCurrencyForm = document.getElementById("selectCurrency2")

    fromCurrencyForm.addEventListener("click", function() {
        var selectedValue = fromCurrencyForm.value

        var valueToDisable = toCurrencyForm.querySelector('option[value="' + selectedValue + '"]')
        if(valueToDisable) {
            for (var i = 0; i < toCurrencyForm.options.length; i++) {
                var option = toCurrencyForm.options[i];
                option.disabled = false
            }
            valueToDisable.disabled = true
        }
    })
    toCurrencyForm.addEventListener("click", function() {
        var selectedValue = toCurrencyForm.value

        var valueToDisable = fromCurrencyForm.querySelector('option[value="' + selectedValue + '"]')
        if(valueToDisable) {
            for (var i = 0; i < fromCurrencyForm.options.length; i++) {
                var option = fromCurrencyForm.options[i];
                option.disabled = false
            }
            valueToDisable.disabled = true
        }3
    })

    const calculateChange = document.getElementById("changeCurrency")

    calculateChange.addEventListener("click", function() {
        const selectedCurrency = fromCurrencyForm.value
        const toCurrency = toCurrencyForm.value
        var url = "https://api.exchangerate-api.com/v4/latest/" + selectedCurrency;
        fetch(url) 
            .then(response => response.json())
            .then(data => {
                var rate = data.rates[toCurrency]
                document.getElementById("displayCurrencyCalculation").style.display = "block"

                document.getElementById("fromCurrencyFormValue").textContent = amount.value + " " + selectedCurrency
                document.getElementById("toCurrencyFormValue").textContent = (Number(amount.value) * rate.toFixed(2)) + " " + toCurrency
            })
    })
}

window.addEventListener("load", function() {
    this.document.getElementById("displayCurrencyCalculation").style.display = "none"
    currencyHandler()
})