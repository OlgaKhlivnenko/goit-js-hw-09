import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const inputEl = document.querySelector(`input#datetime-picker`);
const btnStart = document.querySelector('button[data-start]');
const timerEl = document.querySelector('.timer');
const timer = {
  const start(){
    const startTime = Date.now();
console.log(startTime);
    setInterval(() => {
      const currentTime = Date.now();
console.log(currentTime);
    }, 1000);
  }
}






// const date = Date.now();
// console.log(date);
// const fp = flatpickr(inputEl, {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//     onClose(selectedDates) {
//     console.log(selectedDates[0]);
//     if(selectedDates < date){
//       window.alert("Please choose a date in the future")
//     }
//   },
// });
// btnStart.addEventListener(`click`, onStartTime);

// function onStartTime() {
//     console.log(`click start`);
    
// console.log(fp);
// }
// // const options = {
// //   enableTime: true,
// //   time_24hr: true,
// //   defaultDate: new Date(),
// //   minuteIncrement: 1,
// //     onClose() {
     
// //     console.log(selectedDates[0]);
// //   },
// // };



// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}