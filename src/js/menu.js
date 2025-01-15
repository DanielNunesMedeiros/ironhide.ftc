const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const remove = document.querySelector('.remove');
const overlay = document.querySelector('#menu-overlay');

menuToggle.addEventListener('click', () => {
    menu.classList.remove('hide');
    menu.classList.add('show');
    overlay.classList.add('show');
    menu.style.display = 'block';
});

remove.addEventListener('click', () => {
    menu.classList.remove('show');
    menu.classList.add('hide');
    overlay.classList.remove('show');

    setTimeout(() => {
        menu.style.display = 'none';
    }, 500);
});

overlay.addEventListener('click', () => {
    menu.classList.remove('show');
    menu.classList.add('hide');
    overlay.classList.remove('show');

    setTimeout(() => {
        menu.style.display = 'none';
    }, 500);
});