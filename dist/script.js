const spans = document.querySelectorAll('.fade-in-text span');

spans.forEach((span, index) => {
  span.style.animation = `fade-in 1s ease-in-out ${index * 0.1}s forwards`;
});

