import flatpickr from "flatpickr";

import "flatpickr/dist/flatpickr.min.css";
const inputEl = document.querySelector(`input#datetime-picker`);
const btnStart = document.querySelector('button[data-start]');
const date = Date.now();

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates < date) {
            window.alert("Please choose a date in the future");
      } 
    console.log(selectedDates[0]);
  },
};

btnStart.addEventListener(`click`, onStartTime);
function onStartTime() {
    console.log(`click start`)
    flatpickr(inputEl, options);
}
