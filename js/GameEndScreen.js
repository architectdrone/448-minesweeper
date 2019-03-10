/**
 * Changes WinPopup display to 'block', sets all Square.revealed to true in grid, hides form elements.
 * @function
 * @returns - nothing
 */
function Win()
{
  let trumpet = new Audio('../trumpet.mp3');
  trumpet.play();
  let WinPopup = document.getElementById("WinScreen");
  WinPopup.style.display = "block";
  let form = document.getElementById("msform");
  form.style.display = "none";

  for (let i = 0; i < grid.length; i++){
    for (let j = 0; j < grid[i].length; j++) {
      grid[i][j].revealed = true;
    }
  }
  resetFlags(); //Reset all free flags
  document.getElementById("FlagVsMine").innerHTML = "";
}

/**
 * Changes LosePopup display to 'block', sets all Square.revealed to true in grid, hides form elements.
 * @function
 * @returns - nothing
 */
function Lose()
{
  let explosion = new Audio('../explosion.wav');
  explosion.play();
  for (let i = 0; i < grid.length; i++){
    for (let j = 0; j < grid[i].length; j++){
      if (grid[i][j].bomb === true){
        if (grid[i][j].key === 9)
          grid[i][j].key = -4;

        else if (grid[i][j].key !== -2){
          grid[i][j].key = -3;
        }
      }
      grid[i][j].revealed = true;
    }
  }

  place_grid(grid);
  let LosePopup = document.getElementById("LoseScreen");
  LosePopup.style.display = "block";
  let form = document.getElementById("msform");
  form.style.display = "none";
  resetFlags(); //Reset all free flags
  document.getElementById("FlagVsMine").innerHTML = "";
}
