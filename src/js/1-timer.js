import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

// TODO: add stiles

const timePicker = document.querySelector("input#datetime-picker");
const startBtn = document.querySelector("button[data-start]");
startBtn.disabled = true;
const dataDays = document.querySelector("span[data-days]");
const dataHours = document.querySelector("span[data-hours]");
const dataMinutes = document.querySelector("span[data-minutes]");
const dataSeconds = document.querySelector("span[data-seconds]");
let userSelectedDate;


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      userSelectedDate = selectedDates[0];
      if (userSelectedDate.getTime() < Date.now()) {
          startBtn.disabled = true;
          iziToast.error({
            message: 'Please choose a date in the future',
            position: 'topRight',
            timeout: 2000
          });
      } else { 
          startBtn.disabled = false;
      }
  },
};

flatpickr(timePicker, options);
startBtn.addEventListener("click", startBtnClikHandler)

function startBtnClikHandler(event) {
    startBtn.disabled = true;
    timePicker.disabled = true;
    const intervalId = setInterval(() => {
        const dateDiff = userSelectedDate - Date.now();
        if (dateDiff <= 0) {
            timePicker.disabled = false; 
            return clearInterval(intervalId);
        }
        const convertedDateDiff = convertMs(dateDiff);
        timerMarckupUpdate(convertedDateDiff);
    }, 1000)   
}

function timerMarckupUpdate({ days, hours, minutes, seconds }) {
    dataDays.textContent = String(days).padStart(2, 0);
    dataHours.textContent = String(hours).padStart(2, 0);
    dataMinutes.textContent = String(minutes).padStart(2, 0);
    dataSeconds.textContent = String(seconds).padStart(2, 0);
}


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}


    