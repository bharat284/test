document.addEventListener("DOMContentLoaded", function () {
    let countdown = 60;
    const countdownElement = document.getElementById("countdown");

    function updateCountdown() {
        if (countdown > 0) {
            countdown--;
            countdownElement.textContent = countdown;
        } else {
            clearInterval(timer);
        }
    }

    const timer = setInterval(updateCountdown, 1000);
});
