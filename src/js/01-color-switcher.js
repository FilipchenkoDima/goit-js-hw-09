function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const bodyEl = document.querySelector('body');
let bodyColor = null;

startBtn.addEventListener('click', onChangeColor);
stopBtn.addEventListener('click', onStopChangeColor);

function onChangeColor() {
    bodyColor = setInterval(() => {
        bodyEl.style.backgroundColor = getRandomHexColor();
    }, 1000);
    startBtn.setAttribute('disabled', 'true');
    stopBtn.removeAttribute('disabled');
};

function onStopChangeColor() {
    clearInterval(bodyColor);
    startBtn.removeAttribute('disabled');
    stopBtn.setAttribute('disabled', 'true');
};