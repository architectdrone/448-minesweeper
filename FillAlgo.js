


/**
 * This function allows for the creation of a two dimensional Array
 * @param integer value for row and col dimensions
 * @returns A two dimensional array.
 */
function Array2DCreator(col, row) {
    let array2D = new Array(row);      //define outer array
    for (let i = 0; i < array2D.length; i++)
    {
        array2D[i] = new Array(col);
    }

    return(array2D);
}


/**
 * This function allows for the creation of a two dimensional Array
 * @param integer value for row and col dimensions.
 * @returns A two dimensional array.
 */
function build_grid(row, col) {
    let array2D = new Array(row);
    for (let i = 0; i < array2D.length; i++) {
        array2D[i] = new Array(col);
        for (let j = 0; j < array2D[i].length; j++) {
            array2D[i][j] = -1;
        }
    }
    return array2D;
}


/**
 * Function simply takes the row and col parameter and calls
array creator function to intialize a 2d array. After doing so,
bomb placement will be randomized and empty/marked spots will be visible within
user array.
 * @param integer for row, col dimensions, and bomb number.
 * @returns returns a two dimensional board filled with bomb locations and empty spots marked.
 */
function return_2DBoard(row,col,bombNum)
{

    let bombPlacement1;
    let bombPlacement2;

    let key2DArray = build_grid(col,row);      //define outer array

    for (let i = 0; i <bombNum; i ++)
    {
        bombPlacement1 = (Math.floor(Math.random() * row));
        bombPlacement2 = (Math.floor(Math.random() * col));
        while(key2DArray[bombPlacement1][bombPlacement2] == 'b')
        {
            bombPlacement1 = (Math.floor(Math.random() * row));
            bombPlacement2 = (Math.floor(Math.random() * col));


        }
        key2DArray[bombPlacement1][bombPlacement2] = 'b';

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



