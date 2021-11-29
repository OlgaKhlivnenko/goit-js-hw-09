import '../css/common.css';
const bodyEl = document.querySelector('body');

const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
let timeoutId = null;

function getRandomHexColor() {
  return console.log(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
}

btnStart.addEventListener(`click`, onChangeColor);

function onChangeColor(evt) {
    console.log(evt);
    timeoutId = setInterval(() => {
        const colorChange = getRandomHexColor();
        bodyEl.style.backgroundColor = colorChange;
        console.log(`dct hf,jnftn`)
        btnStart.classList.add(`disabled`);
    }, 1000);
}

btnStop.addEventListener(`click`, onStopChangeColor);

function onStopChangeColor() {
    clearInterval(timeoutId);
    console.log(`Stop`);
}