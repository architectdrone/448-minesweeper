function maxCheck()
{
  let RowInput = document.getElementById("uGR");
  let ColInput = document.getElementById("uGC");
  let BombInput = document.getElementById("uB");

  BombInput.max = ((RowInput.value*ColInput.value)-1);
}


function CreateBoard(NumRows, NumCols, NumBombs)
{
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


function Load()
{
  //gives javascript the reins for not letting page reload
  form = document.getElementById('msform');
  form.addEventListener('submit',(event) =>{
    event.preventDefault();
  });

  CreateBoard(15, 15, 20);
}


//fix positioning on form and header
//fix position on wizard and ok buttons
//fix size of ok button/wizard
//maybe look into other computers compatability with the website displaying stuff
