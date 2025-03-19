let timeLeft = 60;
const countdownElement = document.getElementById("countdown");
const countdownInterval = setInterval(() => {
    if (timeLeft > 0) {
        timeLeft--;
        countdownElement.textContent = timeLeft;
    } else {
        clearInterval(countdownInterval);
    }
}, 1000);

function setVideoSource() {
    const video = document.getElementById("video");
    const source = document.getElementById("videoSource");

    if (window.innerWidth <= 768) {
        source.src = "video_3.mp4"; // Mobile video
    } else {
        source.src = "video_3_2.mp4"; // Desktop video
    }

    video.load(); // Reload video with the new source
}
setVideoSource();
window.addEventListener("resize", setVideoSource);
