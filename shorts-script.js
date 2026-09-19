console.log("JavaScript file successfully loaded!");

const main_logo = document.getElementById('logo');
const triggerDiv = document.getElementById('trigger');
const light_triangle = document.getElementById('beam');

const left_curtain = document.getElementById('left');
const right_curtain = document.getElementById('right');

const static_curtain = document.getElementById('curtain');


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
    static_curtain.classList.add('static-curtains');

    setTimeout(() => {
        light_triangle.classList.add('animate-down-up');
    }, 2000);
   
});