const button = document.querySelector('.button');
const massage = document.querySelector('.message');

button.addEventListener('click', () => {
    if (massage.textContent === '') {
        massage.textContent = 'Bem-vindo ao meu site! Que seu dia seja incrível e cheio de conquistas!';
    } else {
        massage.textContent = '';
    }
});
