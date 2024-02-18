let sun = document.getElementById('sun');
let txt1 = document.getElementById('txt1');
let txt2 = document.getElementById('txt2');
let birds = document.getElementById('birds');
let hill = document.getElementById('hill');
let logo = document.getElementById('logo');
let windowHeight = window.innerHeight;

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    let sunScrollLimit;

    if (window.innerWidth <= 414) {
        sunScrollLimit = 0.1 * windowHeight; // If screen width is 414px or smaller, sunScrollLimit is 0.1 * vh
    } else if (window.innerWidth <= 768) {
        sunScrollLimit = 0.28 * windowHeight; // If screen width is 768px or smaller, sunScrollLimit is 0.35 * vh
    } else if (window.innerWidth <= 1024) {
        sunScrollLimit = 0.27 * windowHeight; // If screen width is 1024px or smaller, sunScrollLimit is 0.33 * vh
    } else if (window.innerWidth <= 480) {
        sunScrollLimit = 0.3 * windowHeight; // If screen width is 480px or smaller, sunScrollLimit is 0.3 * vh
    } else {
        sunScrollLimit = 0.5 * windowHeight; // For other screen sizes, sunScrollLimit is 0.5 * vh
    }

    let sunScroll = Math.min(value, sunScrollLimit);

    // Apply smooth scrolling to sun
    sun.style.transition = 'top 0.1s ease-in-out';

    birds.style.top = value * -0.5 + 'px';
    birds.style.left = value * -0.3 + 'px';
    txt2.style.left = value * 0.2 + 'px';
    hill.style.left = value * 1.5 + 'px';
    txt1.style.left = value * -0.2 + 'px';
    sun.style.top = sunScroll + 'px';
});
