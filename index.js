let seconds = 00;
let tens = 00;
let appendTens = document.getElementById("tens");
let appendSecond = document.getElementById("secend");
let buttonStart = document.getElementById("button-start")
let buttonStop = document.getElementById("button-stop")
let buttonReset = document.getElementById("button-reset")
let interval;

function startTimer (){
 tens ++;
 if (tens <9){
  appendTens.innerHTML = "0" + tens;
 }
 if (tens>9){
  appendTens.innerHTML = tens;
 }
 if (tens>99){
  seconds++;
  appendSecond.innerHTML = "0" + seconds;
  tens =0 ;
  appendTens.innerHTML = "0" +0;

 }
 if (seconds>9){
  appendSecond.innerHTML = seconds
 }
}
buttonStart.onclick = function(){
 interval = setInterval(startTimer)
}
buttonStop.onclick = function () {
 clearInterval(interval)
}
buttonReset.onclick = function(){
 clearInterval(interval);
 tens = "00";
 seconds = "00";
 appendSecond.innerHTML = seconds;
 appendTens.innerHTML = tens



}