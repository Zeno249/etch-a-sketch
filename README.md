# etch-a-sketch
Etch-a-Sketch program for The Odin Project.


# To Do List
    Create a WebPage that has a 16x16 grid of square divs.

    Set up a "hover" effect so that the grid divs change color when the mouse passes over them, leaving a pixilated trail through the grid

Add a button to the top of the screen which will clear the current grid and send the user asking for a number of squares per side for a new grid. Once enetered the new grid should be genereated in the same total space as before (e.g. 980px wide) so that you've got a new sketch pad.  

(Optinal): Add a color selector or a random RGB value that will auto place on the grid passed over.

Push project to GitHub.





///

Create a WebPage that has a 16x16 grid of square divs. 
    - Create the divs using JavaScript. Don't try making them by hand in HTML.
    - Put all of the grid divs inside of another Div designed to act as a "container". This can be made in HTML.
    - Note from TOP: There are different ways make the divs apear as a grid (versus just one on each line).
        - Float / Clear
        - Inline-Block
        - Flexbox
        - CSS Grid
    - Be carefule with Borders and Margins, as they can adjust the size of the squares!
    -"Why isn't the grid being created???"
        - Is the styles.css file linked?
        - Open browsers developer tools.
        - Check if there are any errors in the JavaScript code.
        - Check the "elements" pane to see if the elements have actually shown up but are somehow hidden.


Set up a "hover" effect so that the grid divs change color when the mouse passes over them, leaving a pixilated trail through the grid
    - Hovering is what happens when your mouse enters a div and ends when your mouse leaves it. You can set up event listeners for    either of those evenets as a starting point.
    - There are multiple ways to change the color of the divs includeding:
        - Adding a new class to the div (and assigning it through Javascript)
        - Changing the div's background color using JavaScript


Add a button to the top of the screen which will clear the current grid and send the user asking for a number of squares per side for a new grid. Once enetered the new grid should be genereated in the same total space as before (e.g. 980px wide) so that you've got a new sketch pad.  
    - Tip: Set the limit for the user input to a max of 100. A larger number of squares results in more computer resoureces being used, potentialling causing delays, freezing, or crashing that we want to prevent.
    - Research 'button' tags in HTML and how you can make a JavaScript function run when on is clicked.
    - Should also research Prompts.
    - You should be able to enter 64 and have a brand new 64x64 grid pop up without changing the total amount of pixels used.



(Optinal): Add a color selector or a random RGB value that will auto place on the grid passed over.

Push project to GitHub.