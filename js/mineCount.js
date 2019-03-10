numberOfFlagsOnBoard = 0;
numberOfMinesOnBoard = 0;

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