class Key {
    constructor() {
        this.bomb = create_image_element('img/pAK004-boom.png');
        this.concealed = create_image_element('img/square.png');
    }
}

function create_image_element(path){
    let elem_img = document.createElement('img');
    elem_img.setAttribute('src', path);

    return elem_img;
}

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

function place_grid(html_table) {
    let div = document.getElementById('hold_grid');
    div.appendChild(html_table);
}

function build_html_grid(grid){
    let html_table = document.createElement("table");

    for (let i = 0; i < grid.length; i++) {
        let row = document.createElement('tr');
        html_table.appendChild(row);

        for (let j = 0; j < grid[i].length; j++) {
            let key_list = new Key();
            let data = document.createElement('td');
            let img = key_list.bomb;

            data.appendChild(img);
            row.appendChild(data);
        }
    }
    return html_table;
}

function style_grid(html_table) {
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


let grid = build_grid(5, 5);
let html_grid = style_grid(build_html_grid(grid));
window.onload = () => place_grid(html_grid);