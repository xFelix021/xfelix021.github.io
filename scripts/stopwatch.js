function stopwatchControler() {
    document.getElementById("startStopwatch").addEventListener("click", function() {
        startTimer()
    })

    var stopwatch;
    var timerRunning = false;
    var elapsedMilliseconds = 0;

    function startTimer() {
        if (!timerRunning) {
            stopwatch = setInterval(updateTimer, 10);
            timerRunning = true;
        }
    }

    function stopTimer() {
        if (timerRunning) {
            clearInterval(stopwatch);
            timerRunning = false;
        }
    }

    function updateTimer() {
        elapsedMilliseconds += 10;
        var milliseconds = elapsedMilliseconds % 1000 / 10;
        var seconds = Math.floor(elapsedMilliseconds / 1000) % 60;
        var minutes = Math.floor(elapsedMilliseconds / (1000 * 60)) % 60;
        var timerDisplay = minutes.toString().padStart(2, '0') + ':' +
                            seconds.toString().padStart(2, '0') + ':' +
                            milliseconds.toString().padStart(2, '0');
        document.getElementById('stopwatchDisplay').textContent = timerDisplay;
    }

    function restartTimer() {
        stopTimer()
        elapsedMilliseconds = 0
        document.getElementById('stopwatchDisplay').textContent = "00:00:00"
    }

    document.getElementById('stopStopwatch').addEventListener('click', stopTimer);
    document.getElementById("resetStopwatch").addEventListener("click", restartTimer)
}

window.addEventListener("load", stopwatchControler);