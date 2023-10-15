const selectors = {
    startBtn: document.querySelector("[data-start]"),
    stopBtn: document.querySelector("[data-stop]"),
    body: document.querySelector("body")
}
let timerId = null;
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`
};

selectors.startBtn.addEventListener('click', handlerStart);
function handlerStart() {
   timerId = setInterval(() => {
        selectors.body.style.backgroundColor = getRandomHexColor();
   }, 1000);
    selectors.startBtn.disabled = true;
};
selectors.stopBtn.addEventListener('click', handlerStop);
function handlerStop() {
    clearInterval(timerId);
    selectors.startBtn.disabled = false;
}
    














