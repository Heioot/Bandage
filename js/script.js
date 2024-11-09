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

    let autoPlay = setInterval(() => {
        index = (index + 1) % slides.length;
        updateCarousel();
    }, 5000);
    
    carousel.addEventListener('mouseenter', () => clearInterval(autoPlay));
    carousel.addEventListener('mouseleave', () => {
        autoPlay = setInterval(() => {
            index = (index + 1) % slides.length;
            updateCarousel();
        }, 5000);
    });

    updateCarousel();
}

// Inicializar ambos os carrosséis
initializeCarousel('first-carousel');
initializeCarousel('second-carousel');


//validação email.

document.getElementById("email-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Evita o envio padrão do formulário
    const emailInput = document.getElementById("email");
    const email = emailInput.value.trim();

    // Regex para validar o formato do e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;            // Deve conter um @ ; começar sem espaços; texto após e antes o "."

    if (emailRegex.test(email)) {
        alert("Email válido! Obrigado por se inscrever.");
        emailInput.value = ""; // Limpa o campo após validação
    } else {
        alert("Por favor, insira um e-mail válido.");
    }
});
