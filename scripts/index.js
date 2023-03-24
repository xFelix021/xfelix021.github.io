function displayTime() {
    const date = new Date();
    let hour = date.getHours();

    if(hour < 10) {
        document.getElementById("displayTime").innerHTML = "Guten Morgen!";
    } else if(hour < 17) {
        document.getElementById("displayTime").innerHTML = "Guten Tag!";
    } else if(hour < 24) {
        document.getElementById("displayTime").innerHTML = "Guten Abend!";
    }
}

function displayWeather() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Herford&appid=585161f68d6c0c2cf11dbc25ecc7588f&lang=de&units=metric")
    .then(response => response.json())
    .then(data => {
        var descriptionValue = data["weather"]["0"]["description"];
        var temperatureValue = data["main"]["temp"];
        var feelsLikeValue = data["main"]["temp_min"];
        var humidityValue = data["main"]["humidity"];
        var windspeedValue = data["wind"]["speed"];

        document.getElementById("displayWeatherDESC").innerHTML = descriptionValue
        document.getElementById("displayWeatherTEMP").innerHTML = Math.round(temperatureValue, 1) + "°C"
        document.getElementById("displayWeatherFL").innerHTML = Math.round(feelsLikeValue, 1)
        document.getElementById("displayWeatherHY").innerHTML = Math.round(humidityValue, 1)
        document.getElementById("displayWeatherWS").innerHTML = Math.round(windspeedValue, 2) + "km/h"
    })
}

window.addEventListener("load", function() {
    displayTime()
    displayWeather()
})