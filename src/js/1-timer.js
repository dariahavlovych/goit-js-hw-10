// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

const timePicker = document.querySelector("input#datetime-picker");
const startBtn = document.querySelector("button[data-start]");
let userSelectedDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      if (selectedDates[0].getTime() < Date.now()) {
          window.alert("Please choose a date in the future");
        startBtn.disabled = true;
      } else { 
          userSelectedDate = selectedDates[0];
          startBtn.disabled = false;
      }
  },
};

const picker = flatpickr(timePicker, options);


    