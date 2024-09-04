// Revision: carousel.js - rev-05

// Importing images from the same directory
import lionImg from './lion.png';
import parrotImg from './parrot.png';
import polarBearImg from './polar-bear.png';
import squirrelImg from './squirrel.png';

// Store the images in an array for easy rotation
const images = [lionImg, parrotImg, polarBearImg, squirrelImg];

let currentIndex = 0;

// Function to get the current sequence of images
function getImages() {
    return images.slice(currentIndex).concat(images.slice(0, currentIndex));
}

// Function to rotate images to the left
function rotateLeft() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
}

// Function to rotate images to the right
function rotateRight() {
    currentIndex = (currentIndex + 1) % images.length;
}

// Function to select an image directly
function selectImage(index) {
    currentIndex = (currentIndex + index) % images.length;
}

// Export the carousel functions
export default {
    getImages,
    rotateLeft,
    rotateRight,
    selectImage
};
