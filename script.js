let countdownElement = document.getElementById('countdown');
let countdownNumber = 10;

// Colors to use for the countdown
let colors = ['#ff6347', '#ff4500', '#ff8c00', '#ffd700', '#adff2f', '#32cd32', '#00fa9a', '#00ced1', '#1e90ff', '#8a2be2', '#ff1493'];

function updateCountdown() {
    if (countdownNumber > 0) {
        countdownElement.textContent = countdownNumber;
        countdownElement.style.color = colors[countdownNumber];
        countdownNumber--;
    } else {
        countdownElement.textContent = "كل عام وأنت أجمل من يكون على وجه الأرض";
        countdownElement.style.color = '#ff6347'; // Final color
        countdownElement.style.fontSize = '1vw'; // Adjust font size
        clearInterval(countdownInterval);
    }
}

let countdownInterval = setInterval(updateCountdown, 1000);
