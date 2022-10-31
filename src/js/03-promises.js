import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', onSubmitInputs);

function onSubmitInputs(evt) {
  evt.preventDefault();

  const { delay, step, amount } = evt.target;
  const firstDelay = Number(delay.value);
  const delayStep = Number(step.value);
  const amountEl = Number(amount.value);

  for (let i = 0; i < amountEl; i += 1) {
    createPromise(i + 1, firstDelay + i * delayStep).then(onResolve).catch(onReject);
  };
};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
};

function onResolve({position, delay}) {
  Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`); 
};

function onReject({ position, delay }) {
  Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
};