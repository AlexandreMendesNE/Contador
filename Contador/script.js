const value= document.getElementById('value');
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const resetButton = document.getElementById('reset');

const uptadeValue = () => {
    value.innerHTML = count;
};

let count = 0;
let intervalId = 0;

plusButton.addEventListener('mousedown', () => {
    intervalId = setInterval(() => {
        count += 1;
        uptadeValue();
    }, 100);
});


minusButton.addEventListener('mousedown', () => {
    intervalId = setInterval(() => {
        count -= 1;
        uptadeValue();
    }, 100);
});


resetButton.addEventListener('click', () => {
    count = 0;
    uptadeValue();
});


document.addEventListener('mouseup', () => clearInterval(intervalId));