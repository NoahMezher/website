const height_width = 512;
var num_cells = 40;

function generate_divs(cells) {
    var e = document.getElementById("etchASketchContainer");
    var cell_dimension = height_width / cells;

    for(var i = 0; i < cells; i++) {
        var column = document.createElement("div");
        column.className = "column";
        for(var j = 1; j <= cells; j++) {
            var cell = document.createElement("div");

            cell.className = "grid_element";
            cell.style.width = (cell_dimension + 'px');
            cell.style.height = (cell_dimension + 'px');
            cell.addEventListener("mouseover", change_color);
            column.appendChild(cell);
        }
        e.appendChild(column);
    }
}
function clear_divs() {
    var e = document.getElementById("etchASketchContainer");
    while(e.firstChild) {
        e.removeChild(e.firstChild);
    }
}
function change_color() {
    var single_color = document.getElementById("singleColor");
    var random_color = document.getElementById("randomColor");
    if(single_color.checked) {
        var color = document.getElementById("colorPicker");
        this.style.backgroundColor = "#" + color.value;
    }
    else if(random_color.checked) {
        var color = generate_random_color();
        this.style.backgroundColor = color;
    }
}
function shake() {
    var cells = prompt("Enter the number of cells you want (a number between 2 and 100)");
    if(cells == null)
        cells = 16;
    while(cells < 2 || cells > 100) {
        cells = prompt("Please enter a number between 2 and 100");
    }
    clear_divs();
    generate_divs(cells);
}
function generate_random_color() {
    var letters = "0123456789ABCDEF";
    var color = "#";

    for(var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
generate_divs(num_cells);
