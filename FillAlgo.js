/*
function return_x(x){
    return x
}

let y = 10
console.log(return_x(y))
*/

function return_2DBoard(row,col,bombNum)
{
    let bombPlacement1;
    let bombPlacement2;
    let key2DArray = [[row], [col]];
    for (let i = 0; i < bombNum; i += 1)
    {
        bombPlacement1 = (Math.floor(Math.random() * row));
        bombPlacement2 = (Math.floor(Math.random() * col));
        key2DArray[bombPlacement1][bombPlacement2] = 'b';
    }
    for (let k =0; k<row; k+=1)
    {
        for (let j =0; j<col; j+=1)
        {
            if(key2DArray[k][j] !== 'b')
            {
                key2DArray[k][j] = 'e'
            }
        }
    }

    let user2DArray = [[row], [col]];
    for (let i =0; i< row; i+=1)
    {
        for (let k =0; k<col; k+=1)
        {
            user2DArray[i][k] = key2DArray[i][k];
        }
    }

    for (let j =0; j<row; j+=1)
    {
        for (let k =0; ik<col; k+=1)
        {
            if(user2DArray[row-1][col] !== 'b' && user2DArray[row+1][col] !== 'b'
                && user2DArray[row-1][col-1] !== 'b' && user2DArray[row][col-1] !== 'b' &&
                user2DArray[row+1][col-1] !=='b' && user2DArray[row-1][col] !== 'b' && user2DArray[row-1][col+1] !== 'b'
                 && user2DArray[row][col+1] !== 'b' && user2DArray[row+1][col+1] !== 'b')
            {
                user2DArray[row][col] = 0; 
            }
        }
    }

}