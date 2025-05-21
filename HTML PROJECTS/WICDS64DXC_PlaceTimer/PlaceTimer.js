let timerTextEl = document.getElementById("timerText");
let secondsLeft = 0;
let timerCompletedText = "Your moment is complete";
let timerId;

function clearPreviousTimers() {
    clearInterval(timerId);
}

function setTimerAndShow() {
    timerTextEl.textContent = secondsLeft + " seconds left";
    timerId = setInterval(startTimer, 1000);
}

function startTimer() {
    if (secondsLeft > 1) {
        secondsLeft = secondsLeft - 1;
        timerTextEl.textContent = secondsLeft + " seconds left";
    } else {
        clearPreviousTimers();
        timerTextEl.textContent = timerCompletedText;
    }
}

function twentySecondsButton() {
    secondsLeft = 20;
    clearPreviousTimers();
    setTimerAndShow();
}

function thirtySecondsButton() {
    secondsLeft = 30;
    clearPreviousTimers();
    setTimerAndShow();
}

function fortySecondsButton() {
    secondsLeft = 40;
    clearPreviousTimers();
    setTimerAndShow();
}

function oneMinuteButton() {
    secondsLeft = 60;
    clearPreviousTimers();
    setTimerAndShow();

}