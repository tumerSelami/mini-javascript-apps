const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
    'Hi, there!',
    'Sorry If I disturbed you!',
    'Sup?',
    'This is a notification!'
];

const colors = [
    'red',
    'green',
    'blue',
    'black'
];

button.addEventListener('click', createNotification)

function createNotification() {
    if(toasts.childElementCount < 5) {
        const toastEl = document.createElement('div');
        toastEl.classList.add('toast');
        toastEl.innerText = getRandomMessage();
        toastEl.style.color = getRandomColor();
        toasts.appendChild(toastEl);

        setTimeout(() => {
            toastEl.classList.add('fade-out');
        }, 2500)

        setTimeout(() => {
            toastEl.remove()
        }, 3000);
    }
}

function getRandomMessage() {
    const random = Math.floor(Math.random() * messages.length);
    return messages[random];
}

function getRandomColor() {
    const random = Math.floor(Math.random() * messages.length);
    return colors[random];
}