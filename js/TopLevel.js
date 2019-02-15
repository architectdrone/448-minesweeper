function maxCheck()
{
  let RowInput = document.getElementById("uGR");
  let ColInput = document.getElementById("uGC");
  let BombInput = document.getElementById("uB");

  BombInput.max = ((RowInput.value*ColInput.value)-1);
}


function CreateBoard(NumRows, NumCols, NumBombs)
{
    //Uncomment the next line when the board creation functions are complete.
    //Fill_Algo(NumRows, NumCols, NumBombs);
    if(NumRows == "")
    {
      let RowInput = document.getElementById("uGR");
      NumRows = (RowInput.value == "") ? RowInput.placeholder : RowInput.value;
    }
    if(NumCols == "")
    {
      let ColInput = document.getElementById("uGC");
      NumCols = (ColInput.value == "") ? ColInput.placeholder : ColInput.value;
    }
    if(NumBombs == "")
    {
      let BombInput = document.getElementById("uB");
      console.log(BombInput);
      NumBombs = (BombInput.value == "") ? BombInput.placeholder : BombInput.value;
    }
    console.log(NumRows, NumCols, NumBombs);
    place_grid(setup(NumRows, NumCols, NumBombs));
}


function Load()
{
  //gives javascript the reins for not letting page reload
  form = document.getElementById('msform');
  form.addEventListener('submit',(event) =>{
    event.preventDefault();
  });

  CreateBoard(15, 15, 15);
}


//fix positioning on form and header
//fix position on wizard and ok buttons
//fix size of ok button/wizard
//maybe look into other computers compatability with the website displaying stuff
