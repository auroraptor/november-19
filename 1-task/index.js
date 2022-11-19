const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

const createTimerAnimator = () => {
  return (seconds) => {
    const countDown = new Date().getTime() + seconds * 1000 + 1000;

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDown - now;

      timerEl.textContent = getFormatTime(distance);

      if (distance < 0) {
        clearInterval(timer);
        timerEl.textContent = "⌛️";
      }
    }, 1000);
  };
};

const getFormatTime = (milliseconds) => {
  const hours = Math.floor(milliseconds  / (1000 * 60 * 60))
    .toString()
    .padStart(2, 0);
  const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60))
    .toString()
    .padStart(2, 0);
  const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000)
    .toString()
    .padStart(2, 0);

  return `${hours}:${minutes}:${seconds}`;
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", (e) => {
  inputEl.value = inputEl.value.replace(/[^0-9]/, "");
});

buttonEl.addEventListener("click", () => {
  const seconds = Number(inputEl.value);
  const milliseconds = seconds * 1000;

  timerEl.textContent = getFormatTime(milliseconds);

  animateTimer(seconds);

  inputEl.value = "";
});
