// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

const startBtn = document.querySelector('[data-start]');
const dateTimePicker = document.querySelector('input[type="text"]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

// dateTimePicker.addEventListener('click',)

flatpickr(dateTimePicker, options);


console.log(startBtn);
console.log(dateTimePicker);