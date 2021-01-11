const hamburger = document.getElementById('hamburger');
const navItem = document.querySelector('.nav-items');

hamburger.addEventListener('click', () => {
    navItem.classList.toggle('show');
})