// SITE PREFACE

console.log("JavaScript file successfully loaded!");

const main_logo = document.getElementById('logo');
const triggerDiv = document.getElementById('trigger');
const light_triangle = document.getElementById('beam');

const left_curtain = document.getElementById('left');
const right_curtain = document.getElementById('right');

const static_curtain_l = document.getElementById('curtain-l');
const static_curtain_r = document.getElementById('curtain-r');



triggerDiv.addEventListener('click', () => {
    console.log("Click");
     // Prevent spamming the click while animation runs
    if (main_logo.classList.contains('animate-down-up')) return;

    // Add the class to start the animation
    main_logo.classList.add('animate-down-up');
    triggerDiv.classList.add('animate-down-up', 'circle-clicked');
    light_triangle.classList.add('fade_out');
    right_curtain.classList.add('move_right');
    left_curtain.classList.add('move_left');
    static_curtain_l.classList.add('static-curtains');
    static_curtain_r.classList.add('static-curtains');


    setTimeout(() => {
        light_triangle.classList.add('animate-down-up');
    }, 2000);
   
});

// LINK HANDS

const left_hand = document.getElementById('left-hand');
const left_paper = document.getElementById('left-paper');

left_paper.addEventListener('mouseover', () => {
    left_hand.style.opacity = '1';
});

left_paper.addEventListener('mouseleave', () => {
    left_hand.style.opacity = '0';
});

const right_hand = document.getElementById('right-hand');
const right_paper = document.getElementById('right-paper');

right_paper.addEventListener('mouseover', () => {
    right_hand.style.opacity = '1';
});

right_paper.addEventListener('mouseleave', () => {
    right_hand.style.opacity = '0';
});