/** Class providing list of keys and their corresponding images. */
class Key {
    /** Assign images to each key. */
    constructor() {
        this.key_list = {
            '-4': create_image_element('../img/flagged_bomb.png'),
            '-3': create_image_element('../img/bomb.png'),
            '-2': create_image_element('../img/exploded.png'),
            '-1': create_image_element('../img/square.png'),
            '0' : create_image_element('../img/empty.png'),
            '1' : create_image_element('../img/number-1.png'),
            '2' : create_image_element('../img/number-2.png'),
            '3' : create_image_element('../img/number-3.png'),
            '4' : create_image_element('../img/number-4.png'),
            '5' : create_image_element('../img/number-5.png'),
            '6' : create_image_element('../img/number-6.png'),
            '7' : create_image_element('../img/number-7.png'),
            '8' : create_image_element('../img/number-8.png'),
            '9' : create_image_element('../img/flag.png')
        }
    }
}

/**
 * Create HTML <img> element with src=path
 * @param {string} path - Path to image
 * @returns {HTMLElement} elem_img - HTML <img> element
 */
function create_image_element(path){
    let elem_img = document.createElement('img');
    elem_img.setAttribute('src', path);

    return elem_img;
}

/**
 * Returns image from Key class corresponding to value.
 * @param {Integer} value - Key to find image for
 */
function get_elem_img(value){
    let key = new Key();
    return key.key_list[value.toString()];
}

/**
 * Builds HTML Table populates with HTML Images according to Square.key.
 * @param {Array} grid - 2D Array containing Square objects
 * @returns {HTMLElement} HTML Table with images corresponding with Square.key
 */
function build_html_table(grid){
    let html_table = document.createElement('table');
    html_table.setAttribute('id', 'game_board');

    for (let i = 0; i < grid.length; i++) {
        let row = document.createElement('tr');
        html_table.appendChild(row);

        for (let j = 0; j < grid[i].length; j++) {
            let data = document.createElement('td');
            let img = get_elem_img(grid[i][j].key);
            data.appendChild(img);

            data.addEventListener('click',  function (){
                let shovel = new Audio('../shovel.wav');
                shovel.play();
                grid[i][j].recReveal();
                place_grid(grid);
                if (checkWinCondition(grid)) {
                    Win();
                }
            });
            data.addEventListener('contextmenu',  function (){
                grid[i][j].flag();
                updateFlagVsMineDisplay();
                place_grid(grid);
                if (checkWinCondition(grid)) {
                    Win();
                }
            });

            row.appendChild(data);
        }
    }
    return html_table;
}

/**
 * Applies CSS styling to HTML Table and its child nodes.
 * @param {HTMLElement} html_table - HTML Table to be styled
 * @returns {HTMLElement} - Styled HTML Table
 */
function style_table(html_table) {
    //style <table>
    html_table.style.margin = "10px";
    html_table.style.tableLayout = "fixed";
    html_table.style.borderCollapse = "collapse";

    for (let i = 0; i < html_table.childNodes.length; i++) {
        let row = html_table.childNodes[i];
        for (let j = 0; j < row.childNodes.length; j++) {
            //style <td>
            row.childNodes[j].style.border = "1px solid black";
            row.childNodes[j].style.padding = "0";
            //style <img> in <td><img><td/>
            row.childNodes[j].childNodes[0].style.display = "block";
            row.childNodes[j].childNodes[0].style.width = "25px";
            row.childNodes[j].childNodes[0].style.height = "25px";
        }
    }
    return html_table;
}

/**
 * Generates and appends HTML Table to HTML Element with id='msBoard', removes old HTML Table.
 * @param {Array} array2D - 2D Array of Square elements to generate HTML Table from
 */
function place_grid(array2D) {
    let html_table = style_table(build_html_table(array2D));
    let div = document.getElementById('msBoard');
    let old_table = document.getElementById('game_board');
    if (old_table !== null) {
        div.removeChild(old_table);
    }
    div.appendChild(html_table);
}

/**
 * Generates and appends HTML Table to HTML Element with id='cheatBoard'.
 * @param {Array} array2D - 2D Array of Square elements to generate HTML Table from
 */
function place_grid_cheat(array2D) {
    let html_table = style_table(build_html_table_cheat(array2D));
    console.log(html_table);
    let div = document.getElementById('cheatBoard');
    let old_table = document.getElementById('cheatBoardTable');
    if (old_table !== null) {
        div.removeChild(old_table);
    }
    div.appendChild(html_table);
}

/**
 * Builds HTML Table populates with HTML Images according to Square.key. For cheat mode.
 * @param {Array} grid - 2D Array containing Square objects
 * @returns {HTMLElement} HTML Table with images corresponding with Square.key
 */
function build_html_table_cheat(grid){
    let html_table = document.createElement('table');
    html_table.setAttribute('id', 'cheatBoardTable');
    for (let i = 0; i < grid.length; i++) {
        let row = document.createElement('tr');
        html_table.appendChild(row);
        for (let j = 0; j < grid[i].length; j++) {
            let data = document.createElement('td');
            let img = get_elem_img(grid[i][j].key);
            data.appendChild(img);
            row.appendChild(data);
        }
    }
    return html_table;
}
