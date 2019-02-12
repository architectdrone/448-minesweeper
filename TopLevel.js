//Retrieves each input object.
let RowInput = document.getElementById("uGR");
let ColInput = document.getElementById("uGC");
let BombInput = document.getElementById("uB");

BombInput.max = ((RowInput.value*ColInput.value)-1);

function InputCheck()
{
    //Check to see if the user has changed the placeholder values.
    let NumRows = (RowInput.value == "") ? RowInput.placeholder : RowInput.value;
    let NumCols = (ColInput.value == "") ? ColInput.placeholder : ColInput.value;
    let NumBombs = (BombInput.value == "") ? BombInput.placeholder : BombInput.value;
    let MaxBombs = (NumRows * NumCols) - 1;

    //
    let bombsElm = document.getElementById("uB").max;
    bombsElm.max = 5;
    window.alert("Ran this.");
    if(BombInput.value > ((RowInput.value*ColInput.value)-1))
    {
      alert("Ran this thing.");

    }

//do some kind of get attribute if statement that will or
//will not run the proceeding function for submitting the users info
//to create the game board.


function testFunc()
{
  var asdf = document.getElementById("gameBomb");
  asfd.max = 5;
  return(5);

}




    //So alex, right now this big if else block will still call the "createBoard"
    //function, in addition to on the page load the "createBoard" function will run.
    //I talked with Mr. Kline and figured out a way to stop the user from inputting
    //bad values even before they click submit. Keeping code below for now in case
    //of reversion. Also, the 'min="2"' already gives a prompt in the input
    //box for the user so that they can not even click submit. Test it out with
    //1 in the columns box and try to press submit.


    //Alert the user if any of their inputs are invalid.
    // if(NumRows < 2)
    // {
    //     window.alert("Invalid row input. Please input a value greater than 2.")
    // }
    // else if(NumCols < 2)
    // {
    //     window.alert("Invalid column input. Please input a value greater than 2.")
    // }
    // else if(NumBombs < 1 || NumBombs > MaxBombs)
    // {
    //     window.alert("Invalid bomb input. Please input a value between 1 and " + MaxBombs + ".")
    // }
    // else
    // {
    //     CreateBoard(NumRows, NumCols, NumBombs);
    // }
}

function CreateBoard(NumRows, NumCols, NumBombs)
{
    //Uncomment the next line when the board creation functions are complete.
    //Fill_Algo(NumRows, NumCols, NumBombs);

    //alert("This went through anyway.");
}
