let timer;
let timeRemaining = 45 * 60; // 45 minutes in seconds
let timerRunning = false;

function startPauseTimer() {
    if (timerRunning) {
        clearInterval(timer);
        timerRunning = false;
        document.getElementById('timer').innerText = formatTime(); // Display current time
    } else {
        timer = setInterval(updateTimer, 1000);
        timerRunning = true;
    }
}

function resetTimer() {
    clearInterval(timer);
    timerRunning = false;
    timeRemaining = 45 * 60;
    updateDisplay();
}

function updateTimer() {
    if (timeRemaining > 0) {
        timeRemaining--;
        updateDisplay();

        // Play the alert sound at the 30-minute mark
        if (timeRemaining === 15 * 60) {
            playAlertSound();
        }
    } else {
        clearInterval(timer);
        timerRunning = false;
        playAlertSound(); // Play the alert sound when the timer reaches zero
        //alert("Timer reached 0:00");
        document.getElementById('timer').innerText = '45:00'; // Reset to initial time
    }
}

function updateDisplay() {
    document.getElementById('timer').innerText = formatTime();
}

function formatTime() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function playAlertSound() {
    const alertSound = document.getElementById('alertSound');
    alertSound.play();
}