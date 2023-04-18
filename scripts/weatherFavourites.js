const favouriteWeatherVAR = [
    "Herford"
]

function FavouriteWeather() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=585161f68d6c0c2cf11dbc25ecc7588f&lang=de&units=metric")
    .then(response => response.json())
    .then(data => {
        var descriptionValue = data["weather"]["0"]["description"];
        var temperatureValue = data["main"]["temp"];
        var feelsLikeValue = data["main"]["temp_min"];
        var humidityValue = data["main"]["humidity"];
        var windspeedValue = data["wind"]["speed"];
        var weatherIcon = data["weather"]["0"]["icon"];
    
        React.render()
    })
}

window.addEventListener("load", function() {
    console.log("Script loaded!")
    FavouriteWeather()
})