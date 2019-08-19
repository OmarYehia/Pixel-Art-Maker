"use strict";

//Determine variables
const table = $('#pixelCanvas');
const userHeight = $('#inputHeight');
const userWidth = $('#inputWidth');
const picker = $('#colorPicker');

//Make grid and color it
$('#sizePicker').submit( event => {
    event.preventDefault();

    let width = userWidth.val();
    let height = userHeight.val();

    table.html(''); //clear

    makeGrid(height, width);
    addCellClickListener();
});

//Making the grid
function makeGrid(height, width) {
    for(let i = 0; i < height; i++) {
        table.append('<tr></tr>');
    };

    for(let i = 0; i < width; i++) {
        $('tr').append('<td></td>');
    };
};

//Coloring the grid
function addCellClickListener() {
    $('td').click( event => {
        let color = picker.val();
        $(event.currentTarget).css("background-color", color)
    });
};

//Erasing the color of a cell
document.querySelector("#erase").onclick = function eraseCellClickListener() {
        $('td').click( event => {
        $(event.currentTarget).css("background-color", '')
    })
}
