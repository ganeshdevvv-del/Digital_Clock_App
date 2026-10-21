
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const period = document.getElementById("period");

function updateClock() {
    const currentTime = new Date();

    let hour = currentTime.getHours();

    hour = hour % 12 || 12;

    hours.textContent = String(hour).padStart(2, "0");
    minutes.textContent = String(currentTime.getMinutes()).padStart(2, "0");
    seconds.textContent = String(currentTime.getSeconds()).padStart(2, "0");

    period.textContent = currentTime.getHours() >= 12 ? "PM" : "AM";
}

updateClock();

setInterval(updateClock, 1000);
