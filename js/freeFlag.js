//A collection of tools for the free flag functionality.

let START_POWER = 2; //The power of two that will start the buying.

let number_of_free_flags = 0; //Number of free flags placed.
let current_money = 0; //The amount of money that the player currently has

/**
* Simply checks to see if the criteria for placing a free flag have been met.
* @return True if a free flag is available, false otherwise
*/
function freeFlagAvailable()
{

    return (current_money >= getNextCost());
}

/**
* Simply returns the cost of the next flag.
* @return The cost of the next free flag.
*/
function getNextCost()
{

    return (2**(START_POWER+number_of_free_flags));
}

/**
* Simply places a flag on a bomb. Makes no checks.
*/
function placeFreeFlag()
{
    for (let x = 0; x < grid.length; x++)
    {
        let current_x = grid[x];
        for (y = 0; y < grid[0].length; y++)
        {
            if (grid[x][y].bomb && grid[x][y].key != 9)
            {
                grid[x][y].flag();
                updateFlagVsMineDisplay();
                place_grid(grid);
                return;
            }
        }
    }
}

/** 
* Makes all checks regarding free flags, and updates the free flag store div
* @function
*/
function handleFreeFlag()
{
    
    if (freeFlagAvailable())
    {
        let r = new Audio('../register.wav');
        r.play();
        placeFreeFlag();
        checkWinCondition(grid);
        current_money-=getNextCost();
        number_of_free_flags++;
    }
    document.getElementById("FFStore").innerHTML = "Get free flags by clearing spaces! <br> To next free flag: "+current_money+"/"+getNextCost();
}

/**
 * Resets the flags.
 */
function resetFlags()
{
    number_of_free_flags = 0;
    current_money = 0;
    document.getElementById("FFStore").innerHTML = "";
}