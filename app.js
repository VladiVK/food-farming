const navToggle = document.querySelector('#nav-toggle');
const navLinks = document.querySelector('.nav-links');
const navBar = document.querySelector('#navbar');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show-links');
})

window.addEventListener('scroll', () => {
    if(window.pageYOffset > 80) {
        navBar.classList.add('bg-primary');
    } else {
        navBar.classList.remove('bg-primary');
    }
})