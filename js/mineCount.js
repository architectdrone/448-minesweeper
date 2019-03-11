numberOfFlagsOnBoard = 0;
numberOfMinesOnBoard = 0;

/*
Updates the flag vs mine display. It is empty if there are zero flags, bold if there are more flags than bombs, and normal otherwise.
*/
function updateFlagVsMineDisplay()
{
    let theDiv = document.getElementById("FlagVsMine");
    let message = numberOfFlagsOnBoard+" flags / "+numberOfMinesOnBoard+" mines";
    
    if (numberOfFlagsOnBoard == 0)
    {
        theDiv.innerHTML = "";
    }
    else if (numberOfFlagsOnBoard <= numberOfMinesOnBoard)
    {
        theDiv.innerHTML = message;
    }
    else
    {
        theDiv.innerHTML = "<b>"+message+"</b>";
    }
}