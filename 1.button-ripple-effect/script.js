//select all buttons with ripple class
const buttons = document.querySelectorAll('.ripple');

//for all buttons add click event
for (let button of buttons) {
    button.addEventListener('click', function(e) {
        //find where user clicks
        const x = e.clientX;
        const y = e.clientY;

        //find button position
        const buttonTop = e.target.offsetTop;
        const buttonLeft = e.target.offsetLeft;

        //find where user clicks on a button
        const xInside = x - buttonLeft;
        const yInside = y - buttonTop;

        //create and add circle element with classes and styles
        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.top = yInside + 'px';
        circle.style.left = xInside + 'px';
        this.appendChild(circle);
        //note: this can't be used with arrow functions

        //After 500ms delete circle element
        setTimeout(() => circle.remove(), 500);
    })
}