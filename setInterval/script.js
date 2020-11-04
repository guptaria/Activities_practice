var timeEl = document.querySelector(".time");
var mainEl = document.querySelector("#main");

var secondsLeft = 10;

function setTime() {
  var timerInterval = setInterval(function() {
    
    timeEl.innerHTML= secondsLeft+" seconds left till colorsplosion.";
    secondsLeft--;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  },500);
}

function sendMessage() {
  timeEl.textContent = " ";

}

setTime();