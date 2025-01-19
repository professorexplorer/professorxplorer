// Function to update the live clock
function updateClockAndDate() {
    const clockElement = document.getElementById('liveClock');
    const dateElement = document.getElementById('currentDate');
    const now = new Date();

    // Format time
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;

    // Format date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString(undefined, options);
    dateElement.textContent = formattedDate;
}

// Update the clock and date every second
setInterval(updateClockAndDate, 1000);

// Initialize the clock and date immediately
updateClockAndDate();
