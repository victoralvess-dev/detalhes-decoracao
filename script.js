const slides = document.querySelectorAll('.slide');
const botaoAnterior = document.querySelector('.anterior');
const botaoProximo = document.querySelector('.proximo');
let atual = 0;

function mostrarSlide(indice) {
    slides[atual].classList.remove('ativo');
    atual = (indice + slides.length) % slides.length;
    slides[atual].classList.add('ativo');
}

if (slides.length > 0) {
    botaoProximo.addEventListener('click', () => mostrarSlide(atual + 1));
    botaoAnterior.addEventListener('click', () => mostrarSlide(atual - 1));
}