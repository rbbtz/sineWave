# sineWave

Copy the .js file and paste into the editor playground at https://editor.p5js.org or open the .html file for the experience in a web browser.

This p5.js script creates an interactive 3D grid of triangles that react to the mouse position. The grid is made up of columns and rows, and the color and height of each triangle are influenced by the distance to the mouse cursor.

Summary of the script's functions:

1.	Variables angle, w, cols, and rows are declared to store angle, grid cell width, number of columns, and number of rows, respectively.

2.	The setup() function initializes the canvas with a 3D renderer, sets the grid cell width, and calculates the number of columns and rows based on the  window size.

3.	The draw() function is called continuously, updating the canvas. It sets the background color to white, rotates the grid in 3D space, and translates the grid's position to the center of the canvas.

4.	Two nested loops iterate through the grid's rows and columns. For each grid cell, the height (z-coordinate) of two vertices is calculated based on the sine wave function and the distance from the mouse cursor. The fill color of the triangles is determined by the z-coordinate values.

5.	The angle variable is decreased by 0.1 on each frame, creating a smooth, continuous wave effect.

6.	The mousePressed() function assigns a random angle between -2π and 2π to the angle variable when the mouse is clicked, causing the wave pattern to change.

7.	The windowResized() function adjusts the canvas size to fit the window when the window is resized, ensuring the grid always covers the entire viewport.
