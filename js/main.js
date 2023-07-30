let timerContent = document.querySelector(".time");
let startBtn = document.querySelector(".start");
let pauseBtn = document.querySelector(".pause");
let resetBtn = document.querySelector(".reset");

let intervalVar = null;
let startCnt = 0;

startBtn.addEventListener("click", (e) => {
  startBtn.classList.add("disabled");
  pauseBtn.classList.remove("disabled");
  resetBtn.classList.remove("disabled");
  if (intervalVar) {
    return;
  } else {
    intervalVar = setInterval(() => {
      startCnt++;
      let sec = startCnt % 60;
      let min = Math.floor(startCnt / 60) % 60;
      let hr = Math.floor(startCnt / (60 * 60));

      console.log(startCnt, sec);

      if (sec < 10) {
        sec = "0" + sec;
      }
      if (min < 10) {
        min = "0" + min;
      }
      if (hr < 10) {
        hr = "0" + hr;
      }

      timerContent.innerHTML = `${hr}:${min}:${sec}`;
    }, 1000);
  }
});

pauseBtn.addEventListener("click", (e) => {
  startBtn.classList.remove("disabled");
  pauseBtn.classList.add("disabled");
  resetBtn.classList.remove("disabled");

  clearInterval(intervalVar);
  intervalVar = null;
});

resetBtn.addEventListener("click", (e) => {
  startBtn.classList.remove("disabled");
  pauseBtn.classList.remove("disabled");
  resetBtn.classList.add("disabled");

  clearInterval(intervalVar);
  intervalVar = null;
  startCnt = 0;

  timerContent.innerHTML = `00:00:00`;
});
