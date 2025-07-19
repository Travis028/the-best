// Audio player control
const audio = document.getElementById('loveSong');
const floatingElements = document.querySelectorAll('.floating-element');
const playPauseBtn = document.querySelector('.play-pause-btn');
const body = document.querySelector('body');

// Background images array
const backgroundImages = [
    'idah.png',
    'idah2.png',
    'idah3.png',
    'idah4.png'
];

// Function to change background image
function changeBackground() {
    const currentIndex = backgroundImages.indexOf(body.style.backgroundImage.replace(/url\(['"]?([^'"\)]+)['"]?\)/, '$1'));
    const nextIndex = (currentIndex + 1) % backgroundImages.length;
    const nextImage = backgroundImages[nextIndex];
    
    // Change background image
    body.style.backgroundImage = `url('${nextImage}')`;
}

// Change background every second
setInterval(changeBackground, 1000);

// Floating element images array
const floatingImages = [
    'Wayne.jpeg ',
    'wayne1.jpeg',
    'wayne2.jpeg',
    'idah.png',
    'ida.jpeg',
    'cisse1.jpeg',
    'way.jpeg',
    'WhatsApp Image 2025-07-08 at 22.16.56.jpeg'
];

// Create more floating elements with different sizes
for (let i = 0; i < 4; i++) {
    const element = document.createElement('div');
    element.className = 'floating-element';
    
    // Position elements to float above text
    const left = Math.random() * 80 + 'vw';
    const top = Math.random() * 70 + 'vh';
    
    // Adjust positioning to float above text
    element.style.left = left;
    element.style.top = top;
    
    // Make elements larger and more visible
    element.style.width = Math.random() * 50 + 120 + 'px';  // 120-170px
    element.style.height = Math.random() * 50 + 120 + 'px'; // 120-170px
    element.style.animationDuration = Math.random() * 10 + 15 + 's';
    
    // Add hover effect to make them more visible when needed
    element.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.2)';
        this.style.opacity = '0.8';
    });
    
    element.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(0.95)';
        this.style.opacity = '0.6';
    });
    
    // Add Android-specific adjustments
    if (/Android/.test(navigator.userAgent)) {
        element.style.width = Math.random() * 60 + 150 + 'px';  // 150-210px on Android
        element.style.height = Math.random() * 60 + 150 + 'px'; // 150-210px on Android
        element.style.opacity = '0.7';
    }
    
    document.querySelector('.floating-elements').appendChild(element);
}

// Function to change floating element images
function changeFloatingImages() {
    const elements = document.querySelectorAll('.floating-element');
    elements.forEach(element => {
        const currentIndex = floatingImages.indexOf(element.style.backgroundImage.replace(/url\(['"]?([^'"\)]+)['"]?\)/, '$1'));
        const nextIndex = (currentIndex + 1) % floatingImages.length;
        const nextImage = floatingImages[nextIndex];
        element.style.backgroundImage = `url('${nextImage}')`;
    });
}

// Change floating element images every second
setInterval(changeFloatingImages, 1000);

// Function to toggle play/pause
function toggleAudio() {
    if (audio.paused) {
        audio.play();
        // Change to pause icon
        playPauseBtn.querySelector('svg').innerHTML = '<path d="M10 9v6M14 9v6"/>';
        // Start floating elements animation
        floatingElements.forEach(element => {
            element.style.animationPlayState = 'running';
        });
    } else {
        audio.pause();
        // Change to play icon
        playPauseBtn.querySelector('svg').innerHTML = '<polygon points="5 3 19 12 5 21 5 3"/>';
        // Stop floating elements animation
        floatingElements.forEach(element => {
            element.style.animationPlayState = 'paused';
        });
    }
}

// Add hover effect to button
playPauseBtn.addEventListener('mouseenter', () => {
    playPauseBtn.style.transform = 'scale(1.1)';
});

playPauseBtn.addEventListener('mouseleave', () => {
    playPauseBtn.style.transform = 'scale(1)';
});

// Add click event to the button
playPauseBtn.addEventListener('click', toggleAudio);

// Add click event to the content area to toggle audio
document.querySelector('.content').addEventListener('click', function(e) {
    if (e.target !== this) return;
    toggleAudio();
});

// Start playing audio when the page is loaded
document.addEventListener('DOMContentLoaded', function() {
    audio.play();
    // Change icon to pause since audio is playing
    playPauseBtn.querySelector('svg').innerHTML = '<path d="M10 9v6M14 9v6"/>';
    // Start floating elements animation
    floatingElements.forEach(element => {
        element.style.animationPlayState = 'running';
    });
});
