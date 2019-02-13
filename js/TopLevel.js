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

}

//gives javascript the reins for not letting page reload
form = document.getElementById('msform');
form.addEventListener('submit',(event) =>{
  console.log("Hello world");
  event.preventDefault();
});


//fix positioning on form and header
//fix position on wizard and ok buttons
//fix size of ok button/wizard
//maybe look into other computers compatability with the website displaying stuff
