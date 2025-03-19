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

    if (window.innerWidth <= 468) {
        source.src = "Only_Background.mp4"; // Mobile video
    } else {
        source.src = "video_3_3.mp4"; // Desktop video
    }

    video.load(); // Reload video with the new source
}

// Run when page loads and on resize
setVideoSource();
window.addEventListener("resize", setVideoSource);
