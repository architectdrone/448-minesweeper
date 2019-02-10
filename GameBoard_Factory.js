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

    for(let i = 0; i < grid.length; i++) {
        let row = document.createElement('tr');
        html_table.appendChild(row);

        for(let j = 0; j < grid[i].length; j++) {
            let data = document.createElement('td');
            let text = j.toString();

            data.appendChild(document.createTextNode(text));
            data.style.border = '1px solid black';
            html_table.childNodes[i].appendChild(data);
        }
    }
    return html_table;
}

function style_grid(html_table) {
    html_table.style.borderCollapse = "collapse";

    for(let i = 0; i < html_table.childNodes.length; i++) {
        let row = html_table.childNodes[i];
        for(let j = 0; j < row.childNodes.length; j++) {
            row.childNodes[j].style.border = "1px solid black";
        }
    }
    return html_table;
}

<<<<<<< HEAD
let grid = build_grid(2, 2);
document.onload = place_grid(build_html_grid(grid));
=======
let grid = build_grid(5, 5);
let html_grid = style_grid(build_html_grid(grid));
window.onload = () => place_grid(html_grid);
>>>>>>> 89c5408b72f2e2486bc038b8dc6fad348f167ea1
