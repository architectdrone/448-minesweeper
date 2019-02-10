/*
function return_x(x){
    return x
}

let y = 10
console.log(return_x(y))
*/
function Array2DCreator(col, row)
{
    let arr = new Array(col);
    for (let i =0; i<arr.length; i++)
    {
        arr[i] = new Array(row);
    }
    return(arr);

}
function return_2DBoard(row,col,bombNum)
{

    let bombPlacement1;
    let bombPlacement2;

    let key2DArray = new Array(col, row);      //define outer array

    for (let i = 0; i < bombNum; i ++)
    {
        bombPlacement1 = (Math.floor(Math.random() * row));
        bombPlacement2 = (Math.floor(Math.random() * col));
        key2DArray[bombPlacement1][bombPlacement2] = 'b';
    }
    for (let k =0; k<key2DArray.length; k++)
    {
        for (let j =0; j<key2DArray.length; j++)
        {
            if(key2DArray[k][j] !== 'b')
            {
                key2DArray[k][j] = 'e'
            }
        }
    }


    return(key2DArray);
    // let user2DArray = [[row], [col]];
    // for (let i =0; i< row; i+=1)
    // {
    //     for (let k =0; k<col; k+=1)
    //     {
    //         user2DArray[i][k] = key2DArray[i][k];
    //     }
    // }



}

function main()
{
    console.log("HELLO")
    let row =4;
    let col =5;
    let bomb = 4;
   console.log(return_2DBoard(4,5,4)) ;

}

