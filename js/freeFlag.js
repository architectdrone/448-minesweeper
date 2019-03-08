//A collection of tools for the free flag functionality.

let START_POWER = 2; //The power of two that will start the buying.

let number_of_free_flags = 0; //Number of free flags placed.
let current_money = 0; //The amount of money that the player currently has

function freeFlagAvailable()
{
    /*
    Simply checks to see if the criteria for placing a free flag have been met.
    @return True if a free flag is available, false otherwise
    */
    return (current_money >= getNextCost());
}

function getNextCost()
{
    /*
    Simply returns the cost of the next flag.
    @return The cost of the next free flag.
    */
    return (2**(START_POWER+number_of_free_flags));
}

function placeFreeFlag()
{
    /*
    Simply places a flag on a bomb. Makes no checks.
    */
    for (let x = 0; x < grid.length; x++)
    {
        let current_x = grid[x];
        for (y = 0; y < grid[0].length; y++)
        {
            if (grid[x][y].bomb && grid[x][y].key != 9)
            {
                grid[x][y].flag();
                place_grid(grid);
                return;
            }
        }
    }
}

function handleFreeFlag()
{
    /*
    Makes all checks regarding free flags, and updates the free flag store div
    */
    if (freeFlagAvailable())
    {
        placeFreeFlag();
        checkWinCondition(grid);
        current_money-=getNextCost();
        number_of_free_flags++;
    }
    document.getElementById("FFStore").innerHTML = "To next flag: "+current_money+"/"+getNextCost();
}

function resetFlags()
{
    number_of_free_flags = 0;
    current_money = 0;
    document.getElementById("FFStore").innerHTML = "";
}