function showSurprise() {
    let message = document.getElementById('surprise-message');
    let confetti = document.getElementById('confetti');
    
    // Display a heartfelt message
    message.innerText = 'You’re the best, Nilanjana! Thank you for being an awesome friend 🌸💕';
    message.style.visibility = 'visible';

    // Show confetti
    confetti.style.visibility = 'visible';
    confettiAnimation();
}

function confettiAnimation() {
    const confettiElement = document.getElementById('confetti');
    confettiElement.innerHTML = '';
    for (let i = 0; i < 100; i++) {
        const confetto = document.createElement('div');
        confetto.className = 'confetto';
        confetto.style.left = `${Math.random() * 100}%`;
        confettiElement.appendChild(confetto);
    }
    setTimeout(() => {
        confettiElement.style.visibility = 'hidden';
    }, 3000);  // Confetti lasts for 3 seconds
}
