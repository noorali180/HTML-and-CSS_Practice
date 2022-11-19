'use strict'

const header = document.querySelector('.header');
const navOpenBtn = document.querySelector('.mobile-nav-icon[name = "menu-outline"]');
const navCloseBtn = document.querySelector('.mobile-nav-icon[name = "close-outline"]');

navOpenBtn.addEventListener('click', function(e){
    e.preventDefault();
    header.classList.toggle('nav-open');
});

navCloseBtn.addEventListener('click', function(e){
    e.preventDefault();
    header.classList.toggle('nav-open');
});

// smooth scrolling...
const navLinks = document.querySelectorAll('a:link');

navLinks.forEach((link) => link.addEventListener('click', function(e){
    e.preventDefault();

    
    if( e.target.classList.contains('main-nav-link')){
        header.classList.remove('nav-open');
    }

    const link = e.target.getAttribute('href');

    if(link === null){
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
    else if(link !== '#' && link.startsWith('#')){
        const sectionEl = document.querySelector(link);
        sectionEl.scrollIntoView({behavior: 'smooth'});
    }
}));

// Sticky Header...

const heroEl = document.querySelector('.section-hero');

const observer = new IntersectionObserver(function(entries){
    
        const [entry] = entries;

        if(!entry.isIntersecting) document.body.classList.add('sticky');
        else document.body.classList.remove('sticky');
    
},
{
    root: null,
    threshold: 0,
    rootMargin: '-80px',
})

observer.observe(heroEl);
