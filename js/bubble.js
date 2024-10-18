// Generate 10x10 grid of bubbles
const bubbleGrid = document.getElementById('bubbleGrid');

for (let i = 0; i < 100; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    
    // Set random starting positions for bubbles
    bubble.style.top = `${Math.random() * window.innerHeight}px`;
    bubble.style.left = `${Math.random() * window.innerWidth}px`;

    // Set random float direction for each bubble
    bubble.style.setProperty('--x', `${(Math.random() - 0.5) * 200}px`);
    bubble.style.setProperty('--y', `${(Math.random() - 0.5) * 200}px`);

    // Add click event for popping
    bubble.addEventListener('click', popBubble);
    bubbleGrid.appendChild(bubble);
}

// Pop bubble function
function popBubble(event) {
    const bubble = event.target;
    bubble.classList.add('popped');
    playPopSound();
}

// Play pop sound
function playPopSound() {
    const popSound = document.getElementById('popSound');
    popSound.currentTime = 0;
    popSound.play();
}
