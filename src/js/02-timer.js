import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const startBtn = document.querySelector('[data-start]');
const dateTimePicker = document.querySelector('input[type="text"]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

let currentTime = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const dateDifference = selectedDates[0] - Date.now();
        currentTime = selectedDates[0];
      
        if (dateDifference <= 0) {
            startBtn.setAttribute('disabled', 'true');
            Notify.failure("Please choose a date in the future");
        } else {
            startBtn.removeAttribute('disabled');
        }
    },
};

startBtn.addEventListener('click', onStartTimer);

flatpickr(dateTimePicker, options);

function onStartTimer() {
    const startTimer = setInterval(() => {
        const getReadyTime = convertMs(currentTime - Date.now());
        if (currentTime - Date.now() <= 1000) {
            clearInterval(startTimer);
        }

        daysEl.textContent = getReadyTime.days;
        hoursEl.textContent = getReadyTime.hours;
        minutesEl.textContent = getReadyTime.minutes;
        secondsEl.textContent = getReadyTime.seconds;
    }, 1000);
    startBtn.setAttribute('disabled', 'true');
    dateTimePicker.setAttribute('disabled', 'true');
};



function addLeadingZero(value) {
    return String(value).padStart(2, '0');
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
};