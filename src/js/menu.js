const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
let isMenuOpen = false;

function showMenu() {
    if (!isMenuOpen) {
        menu.style.display = 'flex';
        menu.classList.add('show');
        menu.classList.remove('hide');
        isMenuOpen = true;
    }
}

function hideMenu() {
    if (isMenuOpen) {
        menu.classList.remove('show');
        menu.classList.add('hide');

        menu.addEventListener('animationend', () => {
            if (menu.classList.contains('hide')) {
                menu.style.display = 'none';
                menu.classList.remove('hide');
            }
        }, { once: true });

        isMenuOpen = false;
    }
}

function handleInteractionStart(e) {
    if (!isMenuOpen) {
        showMenu();
    }
}

function handleInteractionEnd(e) {
    if (!menu.contains(e.relatedTarget) && !menuToggle.contains(e.relatedTarget)) {
        hideMenu();
    }
}

menuToggle.addEventListener('mouseenter', showMenu);
menuToggle.addEventListener('mouseleave', (e) => {
    if (!menu.contains(e.relatedTarget)) {
        hideMenu();
    }
});
menu.addEventListener('mouseleave', (e) => {
    if (!menuToggle.contains(e.relatedTarget)) {
        hideMenu();
    }
});

menuToggle.addEventListener('touchstart', handleInteractionStart);
document.addEventListener('touchend', (e) => {
    if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
        hideMenu();
    }
});