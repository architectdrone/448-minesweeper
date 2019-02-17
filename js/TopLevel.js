/**
 * Sets the max number of bombs for the input element.
 * @function
 * @returns nothing
 */
function maxCheck()
{
  let RowInput = document.getElementById("uGR");
  let ColInput = document.getElementById("uGC");
  let BombInput = document.getElementById("uB");

  BombInput.max = ((RowInput.value*ColInput.value)-1);
}

/**
 * Checks the values of the inputs of the html form.
 * @function
 * @returns - true if the inputs are valid, false if the inputs are invalid.
 */
function GoodInputs()
{
  let RowInput = document.getElementById("uGR");
  let ColInput = document.getElementById("uGC");
  let BombInput = document.getElementById("uB");
  let NumRows = (RowInput.value == "") ? RowInput.placeholder : RowInput.value;
  let NumCols = (ColInput.value == "") ? ColInput.placeholder : ColInput.value;
  let NumBombs = (BombInput.value == "") ? BombInput.placeholder : BombInput.value;

  if(NumRows >= 2 && NumRows <= 25 && NumCols >= 2 && NumCols <= 25 && NumBombs >= 1 && NumBombs <= NumRows * NumCols - 1)
  {
    return true;
  }
  else
  {
    return false;
  }
}

/**
 * Hides win or lose screens and calls the function to create a new gid.
 * @param       {string} NumRows  - Number of rows the board will have.
 * @param       {string} NumCols  - Number of columns the board will have.
 * @param       {string} NumBombs - Number of bombs the board will have.
 * @function
 * @returns - nothing
 */
function CreateBoard(NumRows, NumCols, NumBombs)
{
  if(GoodInputs())
  {
    let WinScreen = document.getElementById("WinScreen");
    WinScreen.style.display = "none";
    let LoseScreen = document.getElementById("LoseScreen");
    LoseScreen.style.display = "none";
    let form = document.getElementById("msform");
    form.style.display = "block";

    if(NumRows == undefined)
    {
      let RowInput = document.getElementById("uGR");
      NumRows = (RowInput.value == "") ? RowInput.placeholder : RowInput.value;
    }
    if(NumCols == undefined)
    {
      let ColInput = document.getElementById("uGC");
      NumCols = (ColInput.value == "") ? ColInput.placeholder : ColInput.value;
    }
    if(NumBombs == undefined)
    {
      let BombInput = document.getElementById("uB");
      NumBombs = (BombInput.value == "") ? BombInput.placeholder : BombInput.value;
    }
    place_grid(setup(parseInt(NumRows), parseInt(NumCols), parseInt(NumBombs)));
  }
}

/**
 * Called on page load. Disables the page to reload when form is submitted, and creates an initial board.
 * @function
 * @returns - nothing
 */
function Load()
{
  //gives javascript the reins for not letting page reload
  form = document.getElementById('msform');
  form.addEventListener('submit',(event) =>{
    event.preventDefault();
  });

  CreateBoard(15, 15, 15);
}
