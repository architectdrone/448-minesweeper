/*
function return_x(x){
    return x
}

let y = 10
console.log(return_x(y))
*/


    let row =8;
    let col =5;
    let bomb = 5;
    console.log(return_2DBoard(8,5,5)) ;


function Array2DCreator(col, row) {
    let array2D = new Array(row);      //define outer array
    for (let i = 0; i < array2D.length; i++)
    {
        array2D[i] = new Array(col);
    }

    return(array2D);
}
function return_2DBoard(row,col,bombNum)
{

    let bombPlacement1;
    let bombPlacement2;

    let key2DArray = Array2DCreator(col,row);      //define outer array

    for (let i = 0; i <bombNum; i ++)
    {
        bombPlacement1 = (Math.floor(Math.random() * row));
        bombPlacement2 = (Math.floor(Math.random() * col));
        if(key2DArray[bombPlacement1][bombPlacement2] != 'b')
        {
            key2DArray[bombPlacement1][bombPlacement2] = 'b';
        }

    }
    for (let k =0; k<row; k++)
    {
        for (let j =0; j<col; j++)
        {
            if(key2DArray[k][j] !== 'b')
            {
                key2DArray[k][j] = 'e'
            }
        }
    }


    return(key2DArray);




}



