// Variable to keep track of times clicked
let clickCount = 0;

/**
 * Keeps track of the # of clicks on the board
 */
function incrementClickCount() {
    clickCount++;
    document.getElementById("ClickCount").innerHTML = "You've clicked " +clickCount+ " times!";
}

/**
 * Sets clickCount = 0
 */
function clickCountToZero() {
    clickCount = 0;
    document.getElementById("ClickCount").innerHTML = "";
}