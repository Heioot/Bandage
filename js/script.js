// script.js

const indicators = document.querySelectorAll('.carousel-indicator .indicator');
let currentIndex = 0;

// Função para atualizar o indicador de posição
function updateIndicator() {
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}

// Função para ir para o próximo slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % indicators.length;
    updateIndicator();
}

// Função para ir para o slide anterior
function previousSlide() {
    currentIndex = (currentIndex - 1 + indicators.length) % indicators.length;
    updateIndicator();
}

// Adiciona eventos de clique às setas
document.querySelector('.left-arrow').addEventListener('click', previousSlide);
document.querySelector('.right-arrow').addEventListener('click', nextSlide);

// Inicializa o indicador de posição
updateIndicator();
