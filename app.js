var msecCounter = 0;
var secCounter = 0;
var minCounter = 0;

var min = document.getElementById("min");
var sec = document.getElementById("sec");
var msec = document.getElementById("msec");
var counter = 0;
var interval;

function timer() {
  msecCounter++;
  msec.innerHTML = msecCounter;
  console.log(msecCounter);
  if (msecCounter === 10) {
    secCounter++;
    sec.innerHTML = secCounter;
    msecCounter = 0;
    if (secCounter === 60) {
      secCounter = 0;
      minCounter++;
      min.innerHTML = minCounter;
    }
  }
}

function startTimer(e) {
  interval = setInterval(timer, 100);
}

function stopTimer() {
  clearInterval(interval);
}

function resetTimer() {
  clearInterval(interval);

  min.innerHTML = "00";
  sec.innerHTML = "00";
  msec.innerHTML = "00";
  secCounter = 0;
  minCounter = 0;
  msecCounter = 0;
}