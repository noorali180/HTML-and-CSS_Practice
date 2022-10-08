

const arrows = document.querySelectorAll('.arrow');

console.log(arrows);

arrows.forEach((arr) => {
    arr.addEventListener('click', function(e){
        const arrow = e.target;
        const parent = arrow.closest('.grid-col-3');
        const hiddenBox = parent.querySelector('.hidden-box');
        console.log(hiddenBox);

        parent.classList.toggle('active');
        hiddenBox.classList.toggle('hidden');
    })
})
