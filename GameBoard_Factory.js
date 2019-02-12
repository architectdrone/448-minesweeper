//TODO: Write function to replace toplevel code
//TODO: Replace dummy functions with revealAlgorithm
//TODO: Write function to update table with game-loss images

class Key {
    constructor() {
        this.key_list = {
            '-1': create_image_element('img/square.png'),
            '0' : create_image_element('img/empty.png'),
            '1' : create_image_element('img/number-1.png'),
            '2' : create_image_element('img/number-2.png'),
            '3' : create_image_element('img/number-3.png'),
            '4' : create_image_element('img/number-4.png'),
            '5' : create_image_element('img/number-5.png'),
            '6' : create_image_element('img/number-6.png'),
            '7' : create_image_element('img/number-7.png'),
            '8' : create_image_element('img/number-8.png'),
            '9' : create_image_element('img/flag.png')
        }
    }
}

function create_image_element(path){
    let elem_img = document.createElement('img');
    elem_img.setAttribute('src', path);

    return elem_img;
}

function get_elem_img(value){
    let key = new Key();
    return key.key_list[value.toString()]
}

function build_html_table(grid){
    let html_table = document.createElement("table");
    html_table.setAttribute('id', 'game_board');

    for (let i = 0; i < grid.length; i++) {
        let row = document.createElement('tr');
        html_table.appendChild(row);

        for (let j = 0; j < grid[i].length; j++) {
            let data = document.createElement('td');
            let img = get_elem_img(grid[i][j]);
            data.appendChild(img);

            data.addEventListener('click',  function (){
                if (this.childNodes[0].getAttribute('id') !== 'flag') {
                    // get_coord_array(i, j);
                }
            });
            data.addEventListener('contextmenu',  function (){
                if (this.childNodes[0].getAttribute('id') === 'concealed') {
                   // get_coord_array(i, j);
                }
                else if (this.childNodes[0].getAttribute('id') === 'flag') {

                }
            });

            row.appendChild(data);
        }
    }
    return html_table;
}

//TODO: Replace the following two functions with RevealAlgo / PlaceFlag, respectively
function dummy(i, j){
    console.log(i.toString(), j.toString());
}

function style_table(html_table) {
    //style <table>
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

function place_grid(html_table) {
    let div = document.getElementById('hold_grid');
    let old_table = document.getElementById('game_board');

    if (old_table !== null) {
        div.removeChild(div.childNodes[0]);
    }
    div.appendChild(html_table);
}


let test_grid = [
    [-1, -1, 0],
    [1,  2,  3],
    [4,  5,  6],
    [7 , 8,  9]
];
let html_table = style_table(build_html_table(test_grid));
window.onload = () => place_grid(html_table);