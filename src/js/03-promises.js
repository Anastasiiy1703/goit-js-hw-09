import Notiflix from 'notiflix';

const elements = {
  form: document.querySelector(".form"),
  delay: document.querySelector("input[name='delay']"),
  step: document.querySelector("input[name='step']"),
  amount: document.querySelector("input[name='amount']"),
  createPromiseBtn: document.querySelector("button")
}

elements.form.addEventListener('submit', handlerPromise);

function handlerPromise(event) {
  event.preventDefault();
  const delay = parseInt(elements.delay.value);
  const step = parseInt(elements.step.value);
  const amount = parseInt(elements.amount.value);
  let currentDelay = delay;
  
  for (let i = 0; i < amount; i+=1) {
    createPromise(i + 1, currentDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.failure(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    currentDelay += step;
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
  });
}