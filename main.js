// Navbar Selectors

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
});


// Form validation
function lettersOnly(input) {
    var regex = /[^a-z]/gi;  // regular expression that apply global flag along with an ignore case flag
    input.value = input.value.replace(regex, "");
};
