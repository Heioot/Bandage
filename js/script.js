let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.indicator-dot');
const slideInterval = 10000; // 10 seconds

function updateCarousel() {
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentIndex);
    });
    indicators.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
}

document.querySelector('.carousel-arrow.next').addEventListener('click', nextSlide);
document.querySelector('.carousel-arrow.prev').addEventListener('click', prevSlide);

setInterval(nextSlide, slideInterval);
updateCarousel();
