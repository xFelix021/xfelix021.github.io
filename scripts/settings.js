const AppVersion = "1.0"

function settings() {
    document.getElementById("devicePlatform").innerHTML = "Plattform: " + navigator.platform
    document.getElementById("appVersion").innerHTML = "App-Version: " + AppVersion
}

window.addEventListener("load", function() {
    settings()
})