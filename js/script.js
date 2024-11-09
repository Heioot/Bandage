function initializeCarousel(carouselId) {
    const carousel = document.querySelector(`#${carouselId}`);
    const slides = carousel.querySelectorAll('.carousel-slide');
    const indicators = carousel.querySelectorAll('.indicator-dot');
    const prevButton = carousel.querySelector('.prev');
    const nextButton = carousel.querySelector('.next');
    let index = 0;

    function updateCarousel() {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        indicators.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    nextButton.addEventListener('click', () => {
        index = (index + 1) % slides.length;
        updateCarousel();
    });

    prevButton.addEventListener('click', () => {
        index = (index - 1 + slides.length) % slides.length;
        updateCarousel();
    });

    indicators.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            index = i;
            updateCarousel();
        });
    });

    updateCarousel();
}

// Inicializar ambos os carrosséis
initializeCarousel('first-carousel'); // Certifique-se de adicionar um ID ao primeiro carrossel no HTML
initializeCarousel('second-carousel');
