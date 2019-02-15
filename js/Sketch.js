// function setup(height, width, numBombs) {
//   /*let width=100;
//   let height=100;
//   cols=Math.floor(width/w);
//   rows=Math.floor(height/w);*/
//   cols = width;
//   rows = height;
//   grid=Array2DCreator(cols, rows);
//   for(let i=0; i<rows; i++)
//   {
//     for(let j=0; j<cols; j++)
//     {
//         grid[i][j]=new Square(i, j, w);
//       }
//     }
//     Placebomb(grid, rows, cols, numBombs);
//
//      for(let i=0; i<rows; i++)
//      {
//        for(let j=0; j<cols; j++)
//        {
//            grid[i][j].checkNeigbor();
//          }
//        }
//       return grid;
//   }

function setup(rows, cols, numBombs){
  let grid = Array2DCreator(rows, cols);
  PlaceBombs(grid, numBombs);

  for (let j = 0; j < grid.length; j++) {
    for (let k = 0; k < grid[j].length; k++){
      grid[j][k].checkNeighbor(grid, rows, cols);
    }
  }
  return grid;
}


function PlaceBombs(grid, numBombs)
{
  console.log(grid);
  let x = (Math.floor(Math.random() * grid.length));
  let y = (Math.floor(Math.random() * grid[x].length));
    for(let i=0; i<numBombs; i++){

      while(grid[x][y].bomb == true){
        x = (Math.floor(Math.random() * grid.length));
        y = (Math.floor(Math.random() * grid[x].length));
      }
      grid[x][y].bomb = true;
  }
}


function Array2DCreator(row, col) {
    let array2D = new Array(row);
    console.log(typeof(row));
    for (let i = 0; i < array2D.length; i++){
        array2D[i] = new Array(col);

        for (let j = 0; j < array2D[i].length; j++){
          array2D[i][j] = new Square(i, j);
        }
    }
    return(array2D);
}


function Square(i, j)
{
  this.i=i;
  this.j=j;

  this.bombnearby=0;
  this.bomb = false;
  this.revealed=false;
  this.flagged=false;
  this.key=-1;
}

Square.prototype.recreveal = function(grid, rows, cols){
  if(this.bomb === false)
  {
    this.revealed=true;
    if(this.bombnearby==0)
    {
        this.key=0;
        if(this.i+1<rows && this.j+1<cols && this.i+1>=0 && this.j+1>=0)
      {
        if(!grid[this.i+1][this.j+1].revealed)
      {
        grid[this.i+1][this.j+1].recreveal(grid, rows, cols);
        }
      }
      if(this.i-1<rows && this.j-1<cols && this.i-1>=0 && this.j-1>=0)
      {
        if(!grid[this.i-1][this.j-1].revealed)
        {
          grid[this.i-1][this.j-1].recreveal(grid, rows, cols);
        }
      }
      if(this.i+1<rows && this.j-1<cols && this.i+1>=0 && this.j-1>=0)
      {
        if(!grid[this.i+1][this.j-1].revealed)
        {
          grid[this.i+1][this.j-1].recreveal(grid, rows, cols);
        }
      }
      if(this.i-1<rows && this.j+1<cols && this.i-1>=0 && this.j+1>=0)
      {
        if(!grid[this.i-1][this.j+1].revealed)
       {
         grid[this.i-1][this.j+1].recreveal(grid, rows, cols);
       }
      }
      if(this.j+1<cols)
      {
        if(!grid[this.i][this.j+1].revealed)
        {
          grid[this.i][this.j+1].recreveal(grid, rows, cols);
        }
      }
      if(this.j-1>=0)
      {
        if(!grid[this.i][this.j-1].revealed)
       {
        grid[this.i][this.j-1].recreveal(grid, rows, cols);
       }
      }
      if(this.i+1<rows)
      {
        if(!grid[this.i+1][this.j].revealed)
       {
         grid[this.i+1][this.j].recreveal(grid, rows, cols);
       }
      }
      if(this.i-1>=0)
      {
        if(!grid[this.i-1][this.j].revealed)
        {
          grid[this.i-1][this.j].recreveal(grid, rows, cols);
        }
      }
    }
    else
    {
      this.revealed = true;
      this.key = this.bombnearby;
    }
  }
  else
  {
    this.revealed = true;
  }
}


Square.prototype.contains = function(x,y){
  if(x>this.x && x<this.x+this.w && y>this.y && y<this.y+this.w)
  {
    return(true);
  }
}

Square.prototype.checkNeighbor = function(grid, rows, cols){
    let countbombs=0;
if(this.i+1<rows && this.j+1<cols && this.i+1>=0 && this.j+1>=0)
{
  if(grid[this.i+1][this.j+1].bomb==true)
  {
    countbombs=countbombs+1;
  }
}
  if(this.i-1<rows && this.j-1<cols && this.i-1>=0 && this.j-1>=0)
{
  if(grid[this.i-1][this.j-1].bomb==true)
  {
    countbombs=countbombs+1;
  }
}
if(this.i+1<rows && this.j-1<cols && this.i+1>=0 && this.j-1>=0)
{
  if(grid[this.i+1][this.j-1].bomb==true)
  {
    countbombs=countbombs+1;
  }
}
  if(this.i-1<rows && this.j+1<cols && this.i-1>=0 && this.j+1>=0)
{
  if(grid[this.i-1][this.j+1].bomb==true)
  {
    countbombs=countbombs+1;
  }
}
if(this.j+1<cols)
{
  if(grid[this.i][this.j+1].bomb==true)
  {
    countbombs=countbombs+1;
  }
}
if(this.j-1>=0)
{
  if(grid[this.i][this.j-1].bomb==true)
  {
    countbombs=countbombs+1;
  }
}
if(this.i+1<rows)
{
  if(grid[this.i+1][this.j].bomb==true)
  {
    countbombs=countbombs+1;
  }
}
if(this.i-1>=0)
{
  if(grid[this.i-1][this.j].bomb==true)
  {
    countbombs=countbombs+1;
  }
}
 this.bombnearby= countbombs;
}

Square.prototype.placebommb = function(){
   this.bomb=true;
}

Square.prototype.flag = function(){
  this.flagged=true;
  this.key=9;
}

Square.prototype.keyprinting = function(){
  console.log(this.key);
}
