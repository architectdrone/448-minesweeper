//Listens for click of "Create Board" button and checks for valid input.
let CreateBoardButton = document.getElementById("CreateButton");
CreateBoardButton.addEventListener("click", InputCheck);

function InputCheck()
{
    //Retrieves each input object.
    let RowInput = document.getElementById("gameRow");
    let ColInput = document.getElementById("gameColumn");
    let BombInput = document.getElementById("gameBomb");

    //Check to see if the user has changed the placeholder values.
    let NumRows = (RowInput.value == "") ? RowInput.placeholder : RowInput.value;
    let NumCols = (ColInput.value == "") ? ColInput.placeholder : ColInput.value;
    let NumBombs = (BombInput.value == "") ? BombInput.placeholder : BombInput.value;
    let MaxBombs = (NumRows * NumCols) - 1;

    //Alert the user if any of their inputs are invalid.
    if(NumRows < 2)
    {
        window.alert("Invalid row input. Please input a value greater than 2.")
    }
    else if(NumCols < 2)
    {
        window.alert("Invalid column input. Please input a value greater than 2.")
    }
    else if(NumBombs < 1 || NumBombs > MaxBombs)
    {
        window.alert("Invalid bomb input. Please input a value between 1 and " + MaxBombs + ".")
    }
    else
    {
        CreateBoard(NumRows, NumCols, NumBombs);
    }
}

function CreateBoard(NumRows, NumCols, NumBombs)
{
    //Uncomment the next line when the board creation functions are complete.
    //Fill_Algo(NumRows, NumCols, NumBombs);
}
