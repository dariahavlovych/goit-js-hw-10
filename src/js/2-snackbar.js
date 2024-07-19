import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const snackbarForm = document.querySelector(".form");
const delayValue = document.querySelector("input[name='delay']");
const selectedState = document.querySelector("input[name='state']");
const submitBtn = document.querySelector("button[type='submit']");
let promise;
snackbarForm.addEventListener("submit", onSubmitHadler);

function onSubmitHadler(event) {
    event.preventDefault();
    let state = event.target.elements.state.value;
    let delay = event.target.elements.delay.value;

    promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === 'fulfilled') {
            resolve(`✅ Fulfilled promise in ${delay}ms`)
            } else { reject(`❌ Rejected promise in ${delay}ms`) }
        }, delay);
       })

    promise
        .then(value => iziToast.success({
            message: `${value}`,
            position: 'topRight',
            timeout: 2000,
            icon: '',
            }))
        .catch(error => iziToast.error({
            message: `${error}`,
            position: 'topRight',
            timeout: 2000,
            icon: '',
        }));
    
    event.target.reset();
}

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(5);
//   }, 2000);
// });
