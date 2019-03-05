let cheatMode = false; //Whether or not we are currently in cheat mode.

function onCheatModeButton()
{
    if (!cheatMode)
    {
        enableCheatMode();
    }
    else
    {
        disableCheatMode();
    }
}

function enableCheatMode()
{
    let cheatMode = document.getElementById("cheatBoard");
    cheatMode.display = "block";
    document.getElementById("titleTag").innerHTML = "Cheat Mode Engaged";
}

function disableCheatMode()
{
    let cheatMode = document.getElementById("cheatBoard");
    cheatMode.display = "none";
    document.getElementById("titleTag").innerHTML = "Minesweeper";
}