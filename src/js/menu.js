const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

function showMenu() {
    menu.classList.add('show');
}

function hideMenu() {
    menu.classList.remove('show');
}

// Exibe o menu ao clicar no botão
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show');
});

// Fecha o menu automaticamente quando o cursor sai do botão
menuToggle.addEventListener('mouseleave', () => {
    if (!menu.contains(event.relatedTarget)) { // Verifica se o cursor não está sobre o menu
        hideMenu();
    }
});

// Garante que o menu também feche quando o cursor sair do próprio menu
menu.addEventListener('mouseleave', (event) => {
    if (!menuToggle.contains(event.relatedTarget)) { // Verifica se o cursor não está sobre o botão
        hideMenu();
    }
});