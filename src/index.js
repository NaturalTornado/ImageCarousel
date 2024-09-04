// Revision: index.js - rev-03
import { loadPage } from "./loadPage.js";
import carousel from "./carousel.js";
import './style.css';

document.addEventListener('DOMContentLoaded', () => {
    loadPage();
    initializeCarousel();
    setupEventListeners();
    startAutoRotate(); // Start the auto-rotate functionality
});

function initializeCarousel() {
    const bigImageBox = document.getElementById('bigImageBox');
    const onDeckOne = document.getElementById('onDeckOne');
    const onDeckTwo = document.getElementById('onDeckTwo');
    const onDeckThree = document.getElementById('onDeckThree');

    const images = carousel.getImages();
    bigImageBox.innerHTML = `<img src="${images[0]}" alt="Main Image" style="max-width: 100%; max-height: 100%;">`;
    onDeckOne.innerHTML = `<img src="${images[1]}" alt="On Deck Image 1" style="max-width: 100%; max-height: 100%;">`;
    onDeckTwo.innerHTML = `<img src="${images[2]}" alt="On Deck Image 2" style="max-width: 100%; max-height: 100%;">`;
    onDeckThree.innerHTML = `<img src="${images[3]}" alt="On Deck Image 3" style="max-width: 100%; max-height: 100%;">`;
}

function setupEventListeners() {
    document.getElementById('leftArrowBtn').addEventListener('click', () => {
        carousel.rotateLeft();
        initializeCarousel();
    });

    document.getElementById('rightArrowBtn').addEventListener('click', () => {
        carousel.rotateRight();
        initializeCarousel();
    });

    document.getElementById('circleSelect_1').addEventListener('click', () => {
        carousel.selectImage(1);
        initializeCarousel();
    });

    document.getElementById('circleSelect_2').addEventListener('click', () => {
        carousel.selectImage(2);
        initializeCarousel();
    });

    document.getElementById('circleSelect_3').addEventListener('click', () => {
        carousel.selectImage(3);
        initializeCarousel();
    });
}

function startAutoRotate() {
    setInterval(() => {
        carousel.rotateLeft(); // Rotate the images to the left
        initializeCarousel();  // Reinitialize the carousel to update the displayed images
    }, 5000); // Rotate every 5 seconds (5000 milliseconds)
}
