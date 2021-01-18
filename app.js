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

// smooth scrolling
const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach( item => {
    item.addEventListener('click', e => {
        e.preventDefault();

        navLinks.classList.remove('show-links');
         const id = e.target.getAttribute('href').slice(1);
         const elem= document.getElementById(id);
         let position = elem.offsetTop - 62;

        window.scroll({
            left: 0,
            top: position,
            behavior: 'smooth'
        })
    })
})
