function updateClock() {
    const now = new Date();
    const clockElement = document.getElementById('clock');
    const countdownElement = document.getElementById('countdown');
    const dateString = now.toLocaleDateString('pl-PL', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    clockElement.textContent = dateString;
    const endOfYear = new Date(now.getFullYear(), 11, 31, 23, 59, 59);
    const timeRemaining = endOfYear - now;
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    countdownElement.textContent = `Czas do końca roku: ${days} dni, ${hours} godzin, ${minutes} minut, ${seconds} sekund`;
}

setInterval(updateClock, 1000);
updateClock();