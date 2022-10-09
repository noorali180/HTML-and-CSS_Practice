'use strict'

const slides = document.querySelectorAll(".slide");
const dotsContainer = document.querySelector(".dots");
const dots = document.querySelectorAll(".dot")
const nextBtn = document.querySelector(".btn--right");
const prevBtn = document.querySelector(".btn--left");

// slides.forEach((sl, i) => {
//     sl.style.transform = `translateX(${(i) * 130}%)`;
// })

const slider = function(){
    let curSlide = 0;
    
    // creating dots...
    const createDots = function() {
        
        slides.forEach((_, i) => {
            dotsContainer.insertAdjacentHTML('beforeend', `
            <div class="dot" data-tab="${i}"></div>
            `);
        })
    }
    
    // activating dots ...
    const activateDot = function(){
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot) => {
            dot.classList.remove('active');
        });
    
        document.querySelector(`.dot[data-tab = "${curSlide}"]`).classList.add('active');
    }
    
    // go to slide functionality...
    const goToSlide = function(){
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${130 * (i - curSlide)}%)`
        });
    }
    
    // initial conditions...
    const init = function(){
        createDots();
        activateDot();
        goToSlide();
    }
    init();
    
    // go to next Slide functionality...
    const nextSlide = function(){
        if(curSlide === slides.length - 1) curSlide = 0;
        else curSlide++;
    
        goToSlide();
        activateDot();
    }
    
    // go to previous Slide functionality...
    const prevSlide = function(){
        if(curSlide === 0) curSlide = slides.length - 1;
        else curSlide--;
    
        goToSlide();
        activateDot();
    }

    // got dot functionality...
    const goToDot = function(e){
        const clicked = e.target;

        if(!clicked.classList.contains('dot')) return;

        curSlide = +clicked.dataset.tab;
        activateDot();
        goToSlide();
    }
    
    
    // handling eventlisteners...
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    dotsContainer.addEventListener('click', goToDot);
}

slider();
