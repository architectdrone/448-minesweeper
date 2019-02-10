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

function place_grid(html_grid) {
    let div = document.getElementById('hold_grid');
    div.appendChild(html_grid);
}

function build_html_grid(grid){
    let html_table = document.createElement("table");

    for(let i = 0; i < grid.length; i++){
        let row = document.createElement('tr');
        html_table.appendChild(row);

        for(let j = 0; j < grid[i].length; j++){
            let data = document.createElement('td');
            let text = j.toString();
            data.appendChild(document.createTextNode(text));
            html_table.childNodes[i].appendChild(data);
        }
    }
    return html_table
}

let grid = build_grid(2, 2);
window.onload = () => place_grid(build_html_grid(grid));