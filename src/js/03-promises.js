import Notiflix from 'notiflix';
const form = document.querySelector(".form");

function createPromise(position, delay) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        res(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        rej(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    },delay);
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { delay, step, amount }
  } = event.currentTarget;

  let timerId = null;
  let amountInter = amount.value;
  let positionP = 1;
  let delayP = Number(delay.value);
  timerId = setInterval(() => {
    amountInter -=1;
    createPromise(positionP, delayP)
    .then((value) => {
      Notiflix.Notify.success(value,{timeout: 4000,},);
    })
    .catch((value) => {
      Notiflix.Notify.failure(value,{timeout: 4000,},);
    });

    positionP +=1;
    delayP += Number(step.value);

    if (!amountInter) {
        clearInterval(timerId);
    }
  }, 1000);

});