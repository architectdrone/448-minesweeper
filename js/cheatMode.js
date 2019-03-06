let cheatMode = false; //Whether or not we are currently in cheat mode.

function onCheatModeButton()
{
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

function enableCheatMode()
{
    // let cheatMode = document.getElementById("cheatBoard");
    // cheatMode.display = "block";
    document.getElementById("cheatBoard").style.display = "block";
    document.getElementById("msBoard").style.display = "none";
    document.getElementById("titleTag").innerHTML = "Cheat Mode Engaged";
}

function disableCheatMode()
{
    // let cheatMode = document.getElementById("cheatBoard");
    // cheatMode.display = "none";
    document.getElementById("cheatBoard").style.display = "none";
    document.getElementById("msBoard").style.display = "block";
    document.getElementById("titleTag").innerHTML = "Minesweeper";
}