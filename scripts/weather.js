function weatherListener() {
    document.getElementById("weatherDisplay").style.display = "none"
    document.getElementById("searchBtn").addEventListener("click", function() {
        const searchBox = document.getElementById("cityName");

        if(searchBox.value == "" || searchBox.value == null) {
            alert("Ungültige Stadt")
        } else {
            document.getElementById("weatherDisplay").style.display = "block"

            fetch("https://api.openweathermap.org/data/2.5/weather?q="+searchBox.value+"&appid=585161f68d6c0c2cf11dbc25ecc7588f&lang=de&units=metric")
            .then(response => response.json())
            .then(data => {
                var descriptionValue = data["weather"]["0"]["description"];
                var temperatureValue = data["main"]["temp"];
                var feelsLikeValue = data["main"]["temp_min"];
                var humidityValue = data["main"]["humidity"];
                var windspeedValue = data["wind"]["speed"];
                var weatherIcon = data["weather"]["0"]["icon"];

                document.getElementById("weatherDisplay").style.display = "block"

                document.getElementById("cityNameDisplay").innerHTML = "Wetter in " + searchBox.value
                document.getElementById("displayDescription").innerHTML = descriptionValue
                document.getElementById("displayTemperature").innerHTML = temperatureValue + "°C"
                document.getElementById("displayFeelsLike").innerHTML = feelsLikeValue
                document.getElementById("displayHumidity").innerHTML = humidityValue
                document.getElementById("displayWindspeed").innerHTML = windspeedValue + "km/h"
                document.getElementById("weatherIcon").src = "https://openweathermap.org/img/wn/" + weatherIcon + "@2x.png"
            })
        }
    })
}

window.addEventListener("load", function() {
    weatherListener()
})