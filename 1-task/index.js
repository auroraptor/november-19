const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl

const createTimerAnimator = () => {
  return (seconds) => {
      const timer = setInterval(() => {
      const hh = Math.floor(seconds / 3600).toString().padStart(2, 0);
      const mm = Math.floor((seconds % 3600) / 60).toString().padStart(2, 0);
      const ss = Math.floor(seconds % 60).toString().padStart(2, 0);

      timerEl.textContent = `${hh}:${mm}:${ss}`;

      seconds--;

      if (seconds < 0) {
        clearInterval(timer);
      }
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', (e) => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  inputEl.value = inputEl.value.replace(/[^0-9]/, "");
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
