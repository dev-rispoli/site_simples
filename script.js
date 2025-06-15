const button = document.querySelector('.button');
const message = document.querySelector('.message');

button.addEventListener('click', () => {
    if (message.textContent === '') {
        message.textContent = 'Bem-vindo ao meu site! Que seu dia seja incrível e cheio de conquistas!';
    } else {
        message.textContent = '';
    }
});
