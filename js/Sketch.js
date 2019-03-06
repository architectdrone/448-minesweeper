/**
 * Global grid variable for storing 2D Array used by most functions in project.
 * @type {Square[]}
 */
let grid;

/**
 * Global flag variable for storing the number of flags the user has left.
 * @type {int}
 */
let NumFlags = 0;

/**
 * The setup function perform the job of taking user input size of the board and bombs, then create a 2D array with Square objects. It will also randomly place the bombs in different squares. After all the bombs are placed, all the squares will have a record of how many bombs are nearby it out of the near eight spots.
 * @param rows, cols, input size of 2D array board.
 * @param numBombs number of bombs needed to be placed in the Square objects randomly.
 * @returns return the 2d array with all the properties initialized.
 */
function setup(rows, cols, numBombs)
{
  NumFlags = 9999;
  grid = Array2DCreator(rows, cols);
  PlaceBombs(grid, numBombs);

  for (let j = 0; j < grid.length; j++)
  {
    for (let k = 0; k < grid[j].length; k++)
    {
      grid[j][k].checkNeighbor();
    }
  }
  return grid;
}



/**
 * utilizes a randomized algorithm to place board with random bomb cordinates.
 * @param 2D Array and integer number of bombs
 * @returns NULL
 */


function PlaceBombs(grid, numBombs)
{
  console.log(grid);
  let x = (Math.floor(Math.random() * grid.length));
  let y = (Math.floor(Math.random() * grid[x].length));
  for(let i=0; i<numBombs; i++)
  {

    while(grid[x][y].bomb === true)
    {
      x = (Math.floor(Math.random() * grid.length));
      y = (Math.floor(Math.random() * grid[x].length));
    }
    grid[x][y].bomb = true;
  }
}

/**
 * Creates 2D Array populated with Square objects.
 * @param {Integer} row - # of rows
 * @param {Integer} col - # of columns
 * @returns {Square[]} array2D - 2D Array of Square objects
 */
function Array2DCreator(row, col)
{
  let array2D = new Array(row);
  console.log(typeof(row));
  for (let i = 0; i < array2D.length; i++)
  {
      array2D[i] = new Array(col);
      for (let j = 0; j < array2D[i].length; j++)
      {
        array2D[i][j] = new Square(i, j);
      }
  }
  return(array2D);
}

/**
 * A Square class which has all the properties of a square object needs.
 * @param i,j coordinate of the Square object in the 2D array.
 * @returns Null
 */
class Square
{
  constructor(i, j)
  {
    this.i = i;
    this.j = j;
    this.bombnearby = 0;
    this.bomb = false;
    this.revealed = false;
    this.key = -1;
  }


  recReveal(){
    if(this.key !== 9 && this.revealed === false)
    {
      if(this.bomb === false)
      {
        this.revealed = true;

        //If the tile clicked is blank then recurse.
        if(this.bombnearby === 0)
        {
          //Set the image to the blank image.
          this.key = 0;

          //Checks each of the 8 positions around the tile and reveals the non bombs.
          this.TopLeft(CheckTile);
          this.TopMiddle(CheckTile);
          this.TopRight(CheckTile);
          this.Left(CheckTile);
          this.Right(CheckTile);
          this.BottomLeft(CheckTile);
          this.BottomMiddle(CheckTile);
          this.BottomRight(CheckTile);

        }
        else
        { //Otherwise the tile clicked is a number, so reveal the number.
          this.revealed = true;
          this.key = this.bombnearby;
        }
      }
      else
      {
        //Call lose function because user clicked a bomb.
        if (this.key !== 9) {
          this.key = -2;
          Lose();
        }
      }
    }
  }

    /**
     * CheckNeighbor does the job of counting how many bombs are nearby a Square object out of the eight nearby square.
     * @param No Parameter
     * @returns NULL
     */
  checkNeighbor(){
    this.bombnearby += this.TopLeft(IsBomb);
    this.bombnearby += this.TopMiddle(IsBomb);
    this.bombnearby += this.TopRight(IsBomb);
    this.bombnearby += this.Left(IsBomb);
    this.bombnearby += this.Right(IsBomb);
    this.bombnearby += this.BottomLeft(IsBomb);
    this.bombnearby += this.BottomMiddle(IsBomb);
    this.bombnearby += this.BottomRight(IsBomb);
  }

  /**
   * Places a flag if the square is not revealed and if the user still has flags.
   * @return - nothing
   */
  flag(){
    let pop = new Audio('../pop.flac');
    console.log("Now playing pop...");
    pop.play();
    console.log("Done playing pop...");
    if (this.revealed === false && this.key !== 9 && NumFlags > 0) {
      this.oldKey = this.key;
      this.key = 9;
      NumFlags--;
    }
    else if (this.revealed === false && this.key === 9){
      this.key = this.oldKey;
      NumFlags++;
    }
  }

  /**
   * Checks the tile up and to the left of the given tile.
   * @param {function} func - Will either be the IsBomb function or CheckTile function.
   * @returns {int} - If the IsBomb function is passed then it will return an int.
   *                - If the CheckTile function is passed it will return undefined.
   */
  TopLeft(func)
  {
    return func(this.i - 1, this.j - 1);
  }

  /**
   * Checks the tile directly above the given tile.
   * @param {function} func - Will either be the IsBomb function or CheckTile function.
   * @returns {int} - If the IsBomb function is passed then it will return an int.
   *                - If the CheckTile function is passed it will return undefined.
   */
  TopMiddle(func)
  {
    return func(this.i, this.j - 1);
  }

  /**
   * Checks the tile up and to the right of the given tile.
   * @param {function} func - Will either be the IsBomb function or CheckTile function.
   * @returns {int} - If the IsBomb function is passed then it will return an int.
   *                - If the CheckTile function is passed it will return undefined.
   */
  TopRight(func)
  {
    return func(this.i + 1, this.j - 1);
  }

  /**
   * Checks the tile directly to the left of the given tile.
   * @param {function} func - Will either be the IsBomb function or CheckTile function.
   * @returns {int} - If the IsBomb function is passed then it will return an int.
   *                - If the CheckTile function is passed it will return undefined.
   */
  Left(func)
  {
    return func(this.i - 1, this.j);
  }

  /**
   * Checks the tile directly to the right of the given tile.
   * @param {function} func - Will either be the IsBomb function or CheckTile function.
   * @returns {int} - If the IsBomb function is passed then it will return an int.
   *                - If the CheckTile function is passed it will return undefined.
   */
  Right(func)
  {
    return func(this.i + 1, this.j);
  }

  /**
   * Checks the tile down and to the left of the given tile.
   * @param {function} func - Will either be the IsBomb function or CheckTile function.
   * @returns {int} - If the IsBomb function is passed then it will return an int.
   *                - If the CheckTile function is passed it will return undefined.
   */
  BottomLeft(func) {
    return func(this.i - 1, this.j + 1);
  }

  /**
   * Checks the tile directly below the given tile.
   * @param {function} func - Will either be the IsBomb function or CheckTile function.
   * @returns {int} - If the IsBomb function is passed then it will return an int.
   *                - If the CheckTile function is passed it will return undefined.
   */
  BottomMiddle(func)
  {
    return func(this.i, this.j + 1);
  }

  /**
   * Checks the tile down and to the right of the given tile.
   * @param {function} func - Will either be the IsBomb function or CheckTile function.
   * @returns {int} - If the IsBomb function is passed then it will return an int.
   *                - If the CheckTile function is passed it will return undefined.
   */
  BottomRight(func)
  {
    return func(this.i + 1, this.j + 1);
  }
}

/**
 * Returns true if the given position is within the board's bounds.
 * @param       {int} PosX - The position on the board in the horizontal direction
 * @param       {int} PosY - The position on the board in the vertical direction.
 * @function
 * @returns - nothing
 */
function IsWithinBoard(PosX, PosY)
{
  return (PosX < grid.length) && (PosY < grid[0].length) && (PosX >= 0 && PosY >= 0);
}

/**
 * Reveals the tile at the given position and recursively calls the tiles around it.
 * @param       {int} PosX - The position on the board in the horizontal direction
 * @param       {int} PosY - The position on the board in the vertical direction.
 * @constructor
 * @returns - nothing
 */
function RevealTile(PosX, PosY)
{
  
  if(!grid[PosX][PosY].revealed)
  {
    grid[PosX][PosY].recReveal();
  }
}

/**
 * Checks if a position is within the board's bounds, then reveals that tile.
 * @param       {int} PosX - The position on the board in the horizontal direction
 * @param       {int} PosY - The position on the board in the vertical direction.
 * @constructor
 * @returns - nothing
 */
function CheckTile(PosX, PosY)
{
  if(IsWithinBoard(PosX, PosY))
  {
    RevealTile(PosX, PosY);
  }
}

/**
 * Checks if a position is within the board and if it is a bomb.
 * @param       {int} PosX - The position on the board in the horizontal direction
 * @param       {int} PosY - The position on the board in the vertical direction.
 * @constructor
 * @returns - 1 if the position is within the board and is a bomb,
 *            0 if the position is within the board and is not a bomb,
 *            0 if the position is not within the board.
 */
function IsBomb(PosX, PosY)
{
  if(IsWithinBoard(PosX, PosY))
  {
    if(grid[PosX][PosY].bomb === true)
    {
      return 1;
    }
    else
    {
      return 0;
    }
  }
  else
  {
    return 0;
  }
}

/**
 * Check grid state for win condition.
 * @param {Square[]} grid - 2D Array of Square objects
 * @returns {boolean}
 */
function checkWinCondition(grid){
  for (let i = 0; i < grid.length; i++){
    for (let j = 0; j < grid[i].length; j++){
      if (grid[i][j].bomb === false && grid[i][j].key === -1){
        return false;
      }
    }
  }
  return true;
}
