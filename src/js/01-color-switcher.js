
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
const btn = document.querySelectorAll('button');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const colorBody= document.querySelector('body');

let timerId = null;

startBtn.addEventListener("click", () => {
  startBtn.setAttribute("disabled", ""); 
  stopBtn.removeAttribute("disabled");
  timerId = setInterval(() => {
    const backColor = getRandomHexColor();
    colorBody.style.backgroundColor = backColor;
  }, 1000);
});


stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
  stopBtn.setAttribute("disabled", ""); 
  startBtn.removeAttribute("disabled");
});

const firstItem = document.createElement("div");
firstItem.classList.add('js-btn')
colorBody.insertBefore(firstItem, colorBody.lastElementChild);

firstItem.append(startBtn, stopBtn);
const jsBtn = document.querySelector('.js-btn');
jsBtn.style.textAlign = 'center'
jsBtn.style.marginTop = '200px'
startBtn.style.margin = '20px'
startBtn.style.width = '60px'
startBtn.style.height = '50px'
stopBtn.style.width = '60px'
stopBtn.style.height = '50px'

