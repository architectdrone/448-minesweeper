function maxCheck()
{
  let RowInput = document.getElementById("uGR");
  let ColInput = document.getElementById("uGC");
  let BombInput = document.getElementById("uB");

  BombInput.max = ((RowInput.value*ColInput.value)-1);

  //Trying to account for the resizing of the bomb input field
  //resizing does not work
  //BombInput.size = 100;
  //BombInput.width = 500;


}

function CreateBoard(NumRows, NumCols, NumBombs)
{
    //Uncomment the next line when the board creation functions are complete.
    //Fill_Algo(NumRows, NumCols, NumBombs);


}
