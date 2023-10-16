import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
const elements = {
    startBtn: document.querySelector("[data-start]"),
    input: document.querySelector("#datetime-picker"),
    timer: document.querySelector(".timer"),
    days: document.querySelector("[data-days]"),
    hours: document.querySelector("[data-hours]"),
    minutes: document.querySelector("[data-minutes]"),
    seconds: document.querySelector("[data-seconds]")
}
 elements.startBtn.disabled = true;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose: function(selectedDates) {
    const selectedDate = selectedDates[0];
    if (selectedDate <= new Date()) {
      Notiflix.Notify.failure("Please choose a date in the future");
      elements.startBtn.disabled = true;
    } else {
      elements.startBtn.removeAttribute("disabled");
    }
  },
};

flatpickr("#datetime-picker", options);
elements.startBtn.addEventListener('click', handlarClick);
function handlarClick() {
    const futureDate = new Date(elements.input.value).getTime();
    const interval = setInterval(() => {
        const currentTime = new Date().getTime();
      const remainingTime = futureDate - currentTime;
        if (remainingTime < 0) {
            clearInterval(interval);
            return;
        }
        
        const timeObject = convertMs(remainingTime);
        elements.days.textContent = addLeadingZero(timeObject.days);
        elements.hours.textContent = addLeadingZero(timeObject.hours);
        elements.minutes.textContent = addLeadingZero(timeObject.minutes);
        elements.seconds.textContent = addLeadingZero(timeObject.seconds);
    }, 1000);
}
function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}