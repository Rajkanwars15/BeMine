const container = document.querySelector('.container');
const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const messageDiv = document.getElementById('message');
const letterContainer = document.getElementById('letter-container');

// Array of random "please" messages for when she resists
const pleaseMessages = [
    "Oh please, say yes!",
    "Come on, be mine!",
    "Don't leave me hanging—please!",
    "Pretty please, with all your heart?",
    "Your yes would make my day!",
    "I promise endless hugs if you say yes!",
    "Don't be shy—be my Valentine!",
];

// Function to reposition the "No" button randomly within the container
function repositionNoButton() {
    const contRect = container.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    const maxTop = contRect.height - btnRect.height - 10;
    const maxLeft = contRect.width - btnRect.width - 10;

    const randomTop = Math.max(0, Math.floor(Math.random() * maxTop));
    const randomLeft = Math.max(0, Math.floor(Math.random() * maxLeft));

    noBtn.style.transform = `translate(${randomLeft}px, ${randomTop}px)`;
}

// Move the "No" button on hover (desktop)
noBtn.addEventListener('mouseover', repositionNoButton);

// On click, show a random pleading message & move the button (for mobile)
noBtn.addEventListener('click', function() {
    const randomMsg = pleaseMessages[Math.floor(Math.random() * pleaseMessages.length)];
    messageDiv.textContent = randomMsg;
    repositionNoButton();
});

// On clicking "Yes", reveal the letter below with a scale animation
yesBtn.addEventListener('click', function() {
    // Show final message
    messageDiv.textContent = "Thank you! You're amazing! Happy Valentine's Day!";

    // Hide the yes/no buttons
    document.querySelector('.buttons').style.display = "none";

    // Reveal the letter container (removing 'hidden' from it)
    letterContainer.classList.remove('hidden');
});

// Ensure that audio plays on first user interaction if autoplay is blocked
document.addEventListener("click", function() {
    const bgMusic = document.getElementById("bgMusic");
    bgMusic.play().catch(function(error) {
        console.log("Autoplay was prevented. Audio will play after user interaction.");
    });
}, {once: true});

// Initial position for the "No" button
repositionNoButton();
