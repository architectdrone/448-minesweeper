//source: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_settimeout_cleartimeout2
//functions used for timer
let c = 0; //numerical time value
let t; //sets time delay for count
let timer_on = false;

/**
* Increments time by seconds
*/
function timedCount() {
  document.getElementById("Timer").innerHTML = c;
  c = c + 1;
  t = setTimeout(timedCount, 1000);
}

/**
* Starts timedCount()
*/
function startCount() {
  if (timer_on == false) {
    timer_on = true;
    timedCount();
  }
}

/**
* Stops timer
*/
function stopCount() {
  clearTimeout(t);
  timer_on = false;
}

/**
* resets timer to 0
*/
function resetCount() {
  c = 0;
  document.getElementById("Timer").innerHTML = '0';
}