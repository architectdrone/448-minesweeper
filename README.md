# 448-minesweeper
EECS 448 Group Project #1 - Miller Bath, Adam Wallace, Alex Wittman, Allen Lu, Teddy Kahwaji
Started on 2/7/19


Just Check!

function setup() {
  createCanvas(201, 201);
  cols=floor(width/w);
  rows=floor(height/w);
  grid=Array2DCreator(cols, rows);
  for(var i=0; i<rows; i++)
  {
    for(var j=0; j<cols; j++)
    {
        grid[i][j]=new Square(i, j, w);
      }
    }
    var i;
    var j;
    for(var k=0; k<20 ; k++){
      while(1)
    {
      i=floor(random(0, rows-1));
      j=floor(random(0, cols-1));
      if(grid[i][j].bomb==false)
      {
        grid[i][j].placebommb();
        break;
      }
    }
     }
     for(var i=0; i<rows; i++)
     {
       for(var j=0; j<cols; j++)
       {
           grid[i][j].checkNeigbor();
         }
       }
  }

function draw() {
  background(255);
  for(var i=0; i<rows; i++)
  {
    for(var j=0; j<cols; j++)
    {
       grid[i][j].show();
    }
  }

}

function mousePressed(){
if(mouseButton === LEFT)
{
  for(var i=0; i<rows; i++)
  {
    for(var j=0; j<cols; j++)
    {
        if(grid[i][j].contains(mouseX, mouseY))
        {
          grid[i][j].recreveal();
        }
      }
    }
  }
  if(mouseButton == RIGHT)
  {
    for(var i=0; i<rows; i++)
    {
      for(var j=0; j<cols; j++)
      {
          if(grid[i][j].contains(mouseX, mouseY))
          {
            grid[i][j].flag();
          }
        }
      }
  }
   print(mouseButton);
}

function Array2DCreator(col, row) {
    let array2D = new Array(row);
    for (let i = 0; i < array2D.length; i++)
    {
        array2D[i] = new Array(col);
    }

    return(array2D);
}

var grid;
var cols;
var rows;
var w=20;

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
}

Square.prototype.show = function(){
	stroke(0);
  noFill();
  rect(this.x, this.y, this.w, this.w);
  if (this.revealed)
  {
    if(this.bomb)
    {

      ellipse(this.x+this.w*0.5, this.y+10, this.w*0.5);
    }
    else {
          if(this.bombnearby>0)
          {
           textAlign(CENTER);
           text(this.bombnearby, this.x+10, this.y+14);
         }
         else{
           let c=color(220);
           fill(c);
           noStroke();
           rect(this.x, this.y, this.w-1, this.w-1);
         }
      }
    }
    if(this.flagged)
    {
      textAlign(CENTER);
      text("F", this.x+10, this.y+14);
    }
  }


Square.prototype.recreveal = function(){
  if(this.bomb === false)
  {
    this.revealed=true;
  if(this.bombnearby==0)
    {
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
    var countbombs=0;
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
}
