function initializeSlideshow(slideshowId, images) {
    let currentImageIndex = 0;
    const slideImg = document.querySelector(`#${slideshowId} .slide-img`);

    function changeImage() {
        slideImg.classList.remove('active');

        currentImageIndex = (currentImageIndex + 1) % images.length;

        setTimeout(() => {
            slideImg.src = images[currentImageIndex];
            slideImg.classList.add('active');
        }, 200);
    }

    setInterval(changeImage, 3000);

    slideImg.classList.add('active');
}

const images1 = [
    './src/imagens/prototipo1.jpg',
    './src/imagens/prototipo2.jpg'
];

const images2 = [
    './src/imagens/site-beta1.jpeg',
    './src/imagens/front-end.jpeg'
];

// Inicialize cada slideshow
initializeSlideshow('slideshow1', images1);
initializeSlideshow('slideshow2', images2);