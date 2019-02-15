function setup(height, width, numBombs) {
  /*let width=100;
  let height=100;
  cols=Math.floor(width/w);
  rows=Math.floor(height/w);*/
  cols = width;
  rows = height;
  grid=Array2DCreator(cols, rows);
  for(let i=0; i<rows; i++)
  {
    for(let j=0; j<cols; j++)
    {
        grid[i][j]=new Square(i, j, w);
      }
    }
    Placebomb(grid, rows, cols, numBombs);

     for(let i=0; i<rows; i++)
     {
       for(let j=0; j<cols; j++)
       {
           grid[i][j].checkNeigbor();
         }
       }
      return grid;
  }

function Placebomb(grid, row, col, numBombs)
{
  let i = (Math.floor(Math.random() * row));
  let j = (Math.floor(Math.random() * col));
    for(let k=0; k<numBombs; k++)
    {
      while(grid[i][j].bomb == true)

      {
        i = (Math.floor(Math.random() * row));
        j = (Math.floor(Math.random() * col));
      }
      grid[i][j].bomb = true;
  }
}


function Array2DCreator(col, row) {
    let array2D = new Array(row);
    for (let i = 0; i < array2D.length; i++)
    {
        array2D[i] = new Array(col);
    }

    return(array2D);
}

let grid;
let cols;
let rows;
let w=20;


function Square(i, j, w)
{
  this.i=i;
  this.j=j;
  this.x = i*w;
  this.y = j*w;
  this.w = w;
  this.bombnearby=0;
  this.bomb = false;
  this.revealed=false;
  this.flagged=false;
  this.key=-1;
}

// Square.prototype.show = function(){
// 	stroke(0);
//   noFill();
//   rect(this.x, this.y, this.w, this.w);
//   if (this.revealed)
//   {
//     if(this.bomb)
//     {
//
//       ellipse(this.x+this.w*0.5, this.y+10, this.w*0.5);
//     }
//     else {
//           if(this.bombnearby>0)
//           {
//            textAlign(CENTER);
//            text(this.bombnearby, this.x+10, this.y+14);
//          }
//          else{
//            let c=color(220);
//            fill(c);
//            noStroke();
//            rect(this.x, this.y, this.w-1, this.w-1);
//          }
//       }
//     }
//     if(this.flagged)
//     {
//       textAlign(CENTER);
//       text("F", this.x+10, this.y+14);
//     }
//   }


Square.prototype.recreveal = function(){
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
        grid[this.i+1][this.j+1].recreveal();
        }
      }
      if(this.i-1<rows && this.j-1<cols && this.i-1>=0 && this.j-1>=0)
      {
        if(!grid[this.i-1][this.j-1].revealed)
        {
          grid[this.i-1][this.j-1].recreveal();
        }
      }
      if(this.i+1<rows && this.j-1<cols && this.i+1>=0 && this.j-1>=0)
      {
        if(!grid[this.i+1][this.j-1].revealed)
        {
          grid[this.i+1][this.j-1].recreveal();
        }
      }
      if(this.i-1<rows && this.j+1<cols && this.i-1>=0 && this.j+1>=0)
      {
        if(!grid[this.i-1][this.j+1].revealed)
       {
         grid[this.i-1][this.j+1].recreveal();
       }
      }
      if(this.j+1<cols)
      {
        if(!grid[this.i][this.j+1].revealed)
        {
          grid[this.i][this.j+1].recreveal();
        }
      }
      if(this.j-1>=0)
      {
        if(!grid[this.i][this.j-1].revealed)
       {
        grid[this.i][this.j-1].recreveal();
       }
      }
      if(this.i+1<rows)
      {
        if(!grid[this.i+1][this.j].revealed)
       {
         grid[this.i+1][this.j].recreveal();
       }
      }
      if(this.i-1>=0)
      {
        if(!grid[this.i-1][this.j].revealed)
        {
          grid[this.i-1][this.j].recreveal();
        }
      }
          }
  else
    {
       this.revealed = true;
       this.key = this.bombnearby;
          }
  }
  else {
           this.revealed = true;
    }
  }


Square.prototype.contains = function(x,y){
  if(x>this.x && x<this.x+this.w && y>this.y && y<this.y+this.w)
  {
    return(true);
  }
}

Square.prototype.checkNeigbor = function(){
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
