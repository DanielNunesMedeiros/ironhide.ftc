const images = [
    './src/imagens/tinker-co2.png',
    './src/imagens/design-site-canva.jpeg',
    './src/imagens/stem.jpg',
    './src/imagens/site-beta2.jpeg',
    './src/imagens/code-projeto.png',
    './src/imagens/site-beta1.jpeg'
];

let currentImageIndex = 0;
const carouselImg = document.getElementById('carousel-img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let autoSlideInterval;

function updateImage(index) {
    carouselImg.style.opacity = 0;
    setTimeout(() => {
        carouselImg.src = images[index];
        carouselImg.style.opacity = 1;
    }, 300);
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateImage(currentImageIndex);
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateImage(currentImageIndex);
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(nextImage, 5000);
}

nextButton.addEventListener('click', () => {
    nextImage();
    resetAutoSlide();
});

prevButton.addEventListener('click', () => {
    prevImage();
    resetAutoSlide();
});

autoSlideInterval = setInterval(nextImage, 5000);