import Notiflix from 'notiflix';
function createPromise(position, delay) {
  new Promise((resolved, reject) => {
   console.log(position);
    const shouldResolve = Math.random() > 0.3;
      setTimeout(() => {
     if (shouldResolve) {
       resolved({position, delay});// Fulfill
  } else {
       reject({position, delay});// Reject
  }
    }, delay)
  }).then(({ position, delay }) => {
   
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  }); 
};

const form = document.querySelector(`form`);
const delayEl = document.querySelector(`input[name = delay]`);
const stepEL = document.querySelector(`input[name = step]`);
const amountEl = document.querySelector(`input[name = amount]`);

form.addEventListener(`submit`, onFormSubmit);

function onFormSubmit(evt) {
 let delay = Number(delayEl.value);
  let step = Number(stepEL.value);
  let amount = Number(amountEl.value);
  if (amount <= 0) {
    Notiflix.Notify.warning('Amount can include just numbers up to 1');
  }
  evt.preventDefault();
  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay);
    delay += step;
  };
};





  