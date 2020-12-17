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



/*const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const subject = document.getElementById('subject')
const message = document.getElementById('message')

function Validate() {
    // for Valid Characters i.e. Alphabets, Numbers and Space.
    var pattern = /^[A-Za-z0-9 ]+$/

    //Validate TextBox value against the Regex.
    var isValid = pattern.test(document.getElementById('subject').value);
    if (!isValid) {
        alert = ("Please enter Valid Subject");
    } else {
        //alert("Does not contain Special Characters.");
    }

    return isValid;

    var isValid = pattern.test(document.getElementById("message").value);
    if (!isValid) {
        alert = ("Please enter Valid Message");
    }

};
*/
