const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('liste-menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('show');
});
