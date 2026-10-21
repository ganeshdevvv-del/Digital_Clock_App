const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function updateClock() {
    let currentTime = new Date();

    hours.innerHTML = String(currentTime.getHours()).padStart(2, "0");
    minutes.innerHTML = String(currentTime.getMinutes()).padStart(2, "0");
    seconds.innerHTML = String(currentTime.getSeconds()).padStart(2, "0");
}

updateClock();

setInterval(updateClock, 1000);