const button = document.getElementById('button');
const toasts = document.getElementById('toasts');
let index = 0;
const messages = ["You're Beautiful","You're Nice","You're Handsome","You're The Best",]

button.addEventListener('click', () => createNotification())

function createNotification() {
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.innerText = getRandomMessage()

    toasts.appendChild(notif);
    setTimeout(()=> {
        notif.remove();
    }, 3000)
}


function getRandomMessage() {
    return messages[Math.floor(Math.random()* messages.length)]
}