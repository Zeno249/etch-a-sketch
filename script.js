// This is linked and working

/* This is working code that will create a div class element inside of the container.
const container = document.querySelector('#container'); // creating the container

const content = document.createElement('div'); // Creating a variable attached to the element of 'div'
content.classList.add('content'); // Giving "content" the class of .content
content.textContent = 'This is the glorious text-content!'; // Adding text to the variable content.

container.appendChild(content); // Placing "content" inside of "container"


console.log(container);
*/



const container = document.querySelector('#container');
const reset = document.querySelector('#reset');
var grid = document.querySelectorAll('.gridItem');

var color = 'black';






function makeGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for (let c = 0; c < (rows * cols); c++) { // Guide did not declare 'c' as a let variable
        var cell = document.createElement('div');
        //cell.innerText = (c + 1); // This is saying to make the innerText c + 1 because JS starts it at 0.
        container.appendChild(cell).className = "gridItem";

        cell.addEventListener("mouseover", changeColor);
        

        

        //console.log(reset); // Reset can be called inside of this node.
        
        //reset.addEventListener("click", grid.forEach(resetGrid)); // I think that this will call the forEach function which will call resetGrid
    }
} 

// Running the function to create an amount of cells equalling to the number inputed here
makeGrid(16, 16);

reset.onclick = resetGrid;



function changeColor() {
    // TODO - Need to add multiple colors and such / eraser / rainbow / selected / etc...
    this.style.backgroundColor = 'black'; // 'this' is referenceing the exact cell that needs to be colored.
}


// function resetGrid() {
//     // Need to delete the grid
//     delete document.querySelectorAll('.gridItem');

//     // And then create a new grid of from the selected size (16 x 16)


// }









// function resetColor() {
//     cell.style.backgroundColor = 'white';
// }


// function resetGrid() {
//     console.log('test'); // The function is being called
    
    
//     // use the gridItem with the forEach
// }

// // I don't know what happenes right here
//     // I am  trying to create a reset button
// reset.addEventListener("click", function() {
//     console.log('resetGrid function is being called when the button is clicked.')
//     //document.getElementsByClassName('grid-item')
//     color = 'white'; //  This is setting the variable color to white, but it is not updating the past cells.
//     console.log(color);
// });



// I need to use the changeColor() function that is already set up to change the color in addition to a 
    // forEach call or something to effect every 


// reset.addEventListener("click", function() {
//     console.log('Button is working');

// });









