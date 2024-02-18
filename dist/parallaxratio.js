window.addEventListener('resize', () => {
    const parallaxElement = document.getElementById('parallax');
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;
    const aspectRatio = viewportWidth / viewportHeight;


    if (viewportWidth <= 380 && viewportHeight <= 1300) {
        parallaxElement.style.height = '30vh';
    } else if (viewportWidth <= 480 && viewportHeight <= 1300) {
        parallaxElement.style.height = '35vh';
    } else if (viewportWidth <= 300 && viewportHeight <= 1300) {
        parallaxElement.style.height = '15vh';
    } else if (viewportWidth <= 700 && viewportHeight <= 1300) {
        parallaxElement.style.height = '45vh';
    } else if (aspectRatio >= 16 / 9) {
        parallaxElement.style.height = '100vh';
    } else if (aspectRatio >= 1) {
        if (aspectRatio <= 1.5) {
            parallaxElement.style.height = '70vh';
        } else if (aspectRatio <= 2) {
            parallaxElement.style.height = '100vh';
        } else if (aspectRatio <= 3) {
            parallaxElement.style.height = '45vh';
        } else if (aspectRatio <= 4) {
            parallaxElement.style.height = '20vh';
        } else {
            parallaxElement.style.height = '15vh';
        }
    } else {
        parallaxElement.style.height = '50vh';
    }
});

// Trigger the resize event once on page load to set initial height
window.dispatchEvent(new Event('resize'));
