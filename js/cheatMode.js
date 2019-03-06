let cheatMode = false; //Whether or not we are currently in cheat mode.
/**
 * plays sounds laser.wav and toggles the board on and off.
 */
function onCheatModeButton()
{
    let laser = new Audio('../laser.wav');
    laser.play();
    if (!cheatMode)
    {
        enableCheatMode();
        cheatMode = true;
    }
    else
    {
        disableCheatMode();
        cheatMode = false;
    }
}
/**
 * Toggles board ON by changing CSS display property.
 */
function enableCheatMode()
{
    // let cheatMode = document.getElementById("cheatBoard");
    // cheatMode.display = "block";
    document.getElementById("cheatBoard").style.display = "block";
    document.getElementById("msBoard").style.display = "none";
    document.getElementById("titleTag").innerHTML = "Cheat Mode Engaged";
}
/**
 * Toggles board OFF by changing CSS display property.
 */
function disableCheatMode()
{
    // let cheatMode = document.getElementById("cheatBoard");
    // cheatMode.display = "none";
    document.getElementById("cheatBoard").style.display = "none";
    document.getElementById("msBoard").style.display = "block";
    document.getElementById("titleTag").innerHTML = "Minesweeper";
}
