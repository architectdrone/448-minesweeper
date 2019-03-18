//source: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_settimeout_cleartimeout2
let c = 0;
let t;
let timer_on = false;

function timedCount() {
  document.getElementById("Timer").innerHTML = c;
  c = c + 1;
  t = setTimeout(timedCount, 1000);
}

function startCount() {
  if (timer_on == false) {
    timer_on = true;
    timedCount();
  }
}

function stopCount() {
  clearTimeout(t);
  timer_on = false;
  c = 0;
}