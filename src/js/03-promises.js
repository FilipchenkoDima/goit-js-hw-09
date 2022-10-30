const formEl = document.querySelector('.form');

formEl.addEventListener('submit', onSubmitInputs);

function onSubmitInputs(evt) {
  evt.preventDefault();

  const { delay, step, amount } = evt.target;
  const firstDelay = Number(delay.value);
  const delayStep = Number(step.value);
  const amountEl = Number(amount.value);

  for (let i = 1; i <= amountEl; i++) {
    
    createPromise(i, firstDelay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  };
};



function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
};


