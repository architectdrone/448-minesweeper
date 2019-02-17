/** Global grid variable for storing 2D Array used by most functions in project. */
let grid;
let NumFlags = 0;

function setup(rows, cols, numBombs)
{
  NumFlags = numBombs;
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
  //Recursively reveals the tiles by checking the contents, then the surrounding tiles.
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

  //Calculates the values around the bombs to display.
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

  flag(){
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

  //Checks the tile up and to the left of the given tile.
  TopLeft(func)
  {
    return func(this.i - 1, this.j - 1);
  }

  //Checks the tile directly above the given tile.
  TopMiddle(func)
  {
    return func(this.i, this.j - 1);
  }

  //Checks the tile up and to the right of the given tile.
  TopRight(func)
  {
    return func(this.i + 1, this.j - 1);
  }

  //Checks the tile directly to the left of the given tile.
  Left(func)
  {
    return func(this.i - 1, this.j);
  }

  //Checks the tile directly to the right of the given tile.
  Right(func)
  {
    return func(this.i + 1, this.j);
  }

  //Checks the tile down and to the left of the given tile.
  BottomLeft(func) {
    return func(this.i - 1, this.j + 1);
  }

  //Checks the tile directly below the given tile.
  BottomMiddle(func)
  {
    return func(this.i, this.j + 1);
  }

  //Checks the tile down and to the right of the given tile.
  BottomRight(func)
  {
    return func(this.i + 1, this.j + 1);
  }
}

//Returns true if the given position is within the board's bounds.
function IsWithinBoard(PosX, PosY)
{
  return (PosX < grid.length) && (PosY < grid[0].length) && (PosX >= 0 && PosY >= 0);
}

//Reveals the tile at the given position and recursively calls the tiles around it.
function RevealTile(PosX, PosY)
{
  if(!grid[PosX][PosY].revealed)
  {
    grid[PosX][PosY].recReveal();
  }
}

//Checks if a position is within the board's bounds, then reveals that tile.
function CheckTile(PosX, PosY)
{
  if(IsWithinBoard(PosX, PosY))
  {
    RevealTile(PosX, PosY);
  }
}

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
      if (grid[i][j].bomb === true && grid[i][j].key !== 9){
        return false;
      }
      else if (grid[i][j].bomb === false && (grid[i][j].key === -1 || grid[i][j].key === 9)){
        return false;
      }
    }
  }
  return true;
}
