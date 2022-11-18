'use strict'

const header = document.querySelector('.header');
const navOpenBtn = document.querySelector('.mobile-nav-icon[name = "menu-outline"]');
const navCloseBtn = document.querySelector('.mobile-nav-icon[name = "close-outline"]');
const navLinks = document.querySelectorAll('.main-nav-link');

navOpenBtn.addEventListener('click', function(e){
    e.preventDefault();
    header.classList.add('nav-open');
});

navCloseBtn.addEventListener('click', function(e){
    e.preventDefault();
    header.classList.remove('nav-open');
})

navLinks.forEach((link) => {
    link.addEventListener('click', function(e){
        e.preventDefault();
        header.classList.remove('nav-open');
    })
})
