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

function build_html_grid(grid){
    let html_table = document.createElement("table");

    for (let i = 0; i < grid.length; i++) {
        let row = document.createElement('tr');
        html_table.appendChild(row);

        for (let j = 0; j < grid[i].length; j++) {
            let data = document.createElement('td');
            let img = get_elem_img(grid[i][j]);

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

function place_grid(html_table) {
    let div = document.getElementById('hold_grid');
    div.appendChild(html_table);
}


let test_grid = [
    [-1, -1, -1],
    [-1,  0,  1],
    [ 3,  4,  8],
    [9 ,  0,  1]
];
let html_grid = style_grid(build_html_grid(test_grid));
window.onload = () => place_grid(html_grid);