// script.js

document.addEventListener('DOMContentLoaded', () => {
    createBackgroundHearts(100); // Adjust number of hearts as needed
});

document.addEventListener('mousemove', function(e) {
    createHeart(e.pageX, e.pageY);
});

function createHeart(x, y) {
    const heart = document.createElement('div');
    heart.className = 'trail-heart';
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 1000);
}

function createBackgroundHearts(numHearts) {
    const container = document.querySelector('.hearts-background');
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;

    for (let i = 0; i < numHearts; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart-bg';
        const x = Math.random() * containerWidth;
        const delay = Math.random() * 5;
        heart.style.left = `${x}px`;
        heart.style.animationDelay = `${delay}s`;
        container.appendChild(heart);
    }
}

// Function to be triggered on button click
function buttonClickFunction() {
    // Replace 'your-new-page.html' with the URL of the page you want to navigate to
    window.location.href = 'your-new-page.html';
}

// Event listener for button click
const button = document.querySelector('.center-button');
button.addEventListener('click', buttonClickFunction);
// Function to be triggered on button click
function buttonClickFunction() {
    // Replace 'form-page.html' with the URL of your form page
    window.location.href = 'form-page.html';
}
function handleButtonClick(url) {
    const button = event.target;
    button.classList.add('clicked');

    setTimeout(() => {
        window.location.href = url;
    }, 500); // Adjust delay as needed for animation

    // Prevent default form submission
    return false;
}
function handleButtonClick(url) {
    window.location.href = url;
}
document.addEventListener('DOMContentLoaded', () => {
    const moveButton = document.querySelector('.move-button');
    const clickButton = document.querySelector('.click-button');

    moveButton.addEventListener('mouseover', () => {
        const randomX = Math.floor(Math.random() * 200) - 100;
        const randomY = Math.floor(Math.random() * 200) - 100;
        moveButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
    });
    
    moveButton.addEventListener('click', (event) => {
        event.preventDefault();
    });

    clickButton.addEventListener('click', () => {
        window.location.href = 'https://www.choosemybicycle.com/en/bicycles/firefox-road-runner-pro-v-2015'; // Replace with your desired URL
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const moveButton = document.querySelector('.move-button');
    const clickButton = document.querySelector('.click-button');

    moveButton.addEventListener('mouseover', () => {
        const randomX = Math.floor(Math.random() * 200) - 100;
        const randomY = Math.floor(Math.random() * 200) - 100;
        moveButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
    });
    
    moveButton.addEventListener('click', (event) => {
        event.preventDefault();
    });

    clickButton.addEventListener('click', () => {
        
    });
});
