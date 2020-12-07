//Selectors

let header = document.querySelector('.header');
let hamburgerMenu = document.querySelector('.hamburger-menu');
let navList = document.querySelector('.nav-list');

window.addEventListener('scroll', function () {
    let windowPosition = window.scrollY > 650;
    header.classList.toggle('active', windowPosition)
})

hamburgerMenu.addEventListener('click', function () {
    header.classList.toggle('menu-open');
})

navList.addEventListener('click', function () {
    header.classList.toggle('menu-open');
})
