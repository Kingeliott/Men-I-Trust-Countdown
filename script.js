function formatTime(timer) {
    // Calculate months, days, hours, minutes, and seconds
    const months = Math.floor(timer / (30 * 24 * 60 * 60)); // Calculate months
    const remainingAfterMonths = timer % (30 * 24 * 60 * 60); // Remaining seconds after months

    const days = Math.floor(remainingAfterMonths / (24 * 60 * 60)); // Calculate days
    const remainingAfterDays = remainingAfterMonths % (24 * 60 * 60); // Remaining seconds after days

    const hours = Math.floor(remainingAfterDays / 3600); // Calculate hours
    const remainingAfterHours = remainingAfterDays % 3600; // Remaining seconds after hours

    const minutes = Math.floor(remainingAfterHours / 60); // Calculate minutes
    const seconds = remainingAfterHours % 60; // Calculate seconds

    // Debug logs to inspect intermediate values
    console.log("Timer (seconds):", timer);
    console.log("Months:", months);
    console.log("Days:", days);
    console.log("Hours:", hours);
    console.log("Minutes:", minutes);
    console.log("Seconds:", seconds);

    // Update the HTML elements with the calculated values
    document.getElementById("months").textContent = months;
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

function getSecondsUntil(targetDate) {
    const now = new Date(); // Get current time
    const target = new Date(targetDate); // Convert target date to Date object
    const diffInSeconds = Math.floor((target - now) / 1000); // Get time difference in seconds
    return diffInSeconds > 0 ? diffInSeconds : 0; // Ensure the value is not negative
}

function startCountdown() {
    const targetDate = "2025-08-21T20:00:00"; // Set your target date here
    let countdownSeconds = getSecondsUntil(targetDate);

    // Log initial countdownSeconds for debugging
    console.log("Initial countdownSeconds:", countdownSeconds);

    function updateCountdown() {
        if (countdownSeconds > 0) {
            formatTime(countdownSeconds); // Format and display the time
            countdownSeconds--; // Decrease timer every second
            console.log("Updated countdownSeconds:", countdownSeconds); // Log each decrement
        } else {
            clearInterval(interval); // Stop the countdown when it reaches 0
            console.log("Countdown finished!");
        }
    }

    // Update immediately and every second after that
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
}

// Start countdown when the page loads
document.addEventListener("DOMContentLoaded", startCountdown);

// Song List (Add your actual song file paths here)
const songs = ["songs/Men I Trust - Ante Meridiem.mp3", "songs/Men I Trust - Organon.mp3", "songs/Men I Trust - Say Can You Hear (garage session).mp3", "songs/Men I Trust - Show Me How.mp3", "songs/Men I Trust - Sorbitol.mp3", 
    "songs/Men I Trust - Sugar.mp3", "songs/Men I Trust - Tree Among Shrubs.mp3"
];  
let currentSongIndex = 0;

const audio = document.getElementById("music");
const playPauseBTN = document.getElementById("playPauseBTN");
const prevBTN = document.getElementById("prevBTN");
const nextBTN = document.getElementById("nextBTN");

// Load first song
audio.src = songs[currentSongIndex];

// Play or Pause Function
playPauseBTN.addEventListener("click", function () {
    if (audio.paused) {
        audio.play();
        playPauseBTN.textContent = "⏸ Pause"; 
    } else {
        audio.pause();
        playPauseBTN.textContent = "▶ Play"; 
    }
});

// Previous Song Function
prevBTN.addEventListener("click", function () {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length; // Loop back if at first song
    audio.src = songs[currentSongIndex];
    audio.play();
    playPauseBTN.textContent = "⏸ Pause";
});

// Next Song Function
nextBTN.addEventListener("click", function () {
    currentSongIndex = (currentSongIndex + 1) % songs.length; // Loop to first song if at last
    audio.src = songs[currentSongIndex];
    audio.play();
    playPauseBTN.textContent = "⏸ Pause";
});

// Auto-play next song when current one ends
audio.addEventListener("ended", function () {
    nextBTN.click(); 
});

// Array of images for the slideshow
const images = [
    "images/album.jfif",
    "images/logo.jpg",
    "images/logo2.jfif",
    "images/MITSpotify.jpg"
];

// Select the container
const container = document.querySelector('.slideshow-container');

// Counter to keep track of current image index
let currentImageIndex = 0;

// Function to change background image
function changeBackgroundImage() {
    container.style.backgroundImage = `url(${images[currentImageIndex]})`;
    currentImageIndex = (currentImageIndex + 1) % images.length; // Cycle through images
}

// Initial background image set
changeBackgroundImage();

// Change the background image every 5 seconds (or any time interval you want)
setInterval(changeBackgroundImage, 5000);
