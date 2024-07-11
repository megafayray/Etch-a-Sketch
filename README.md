The Odin Project Foundations Course
Project: Etch-a-Sketch

Using DOM manipulation, create a browser version of something between
a sketchpad and an Etch-a-Sketch

Lessons learned, knowledge solidified:
- Use "defer" in the html link to js. If you don't use "defer" the Javascript is loaded before the HTML, so the element you're trying to access doesn't exist in the DOM yet, which will throw a "Uncaught TypeError: Cannot read property 'appendChild' of null"
- Create a square div by setting height to whatever, then "aspect-ratio: 1/1;"

DONE:
- Set up GitHub repo
- Created index.html, main.css, main.js
- Created a webpage with a 16x16 grid of square divs using Javascript
-- Created a container div in html to hold the squares
-- Used Flexbox to make the square divs in a grid (vs. one on each line)

TO DO:
- Set up a hover effect so that the grid divs change colour when your mouse
passes over them, leaving a pixelated trail through the grid
*Idea: use DOM methods and event listeners. When x happens, change the style (background-color) to a different color

- Add a button at the top of the screen that will send the user a popup (prompt) asking for the number of squares per side for the new grid. Once entered, the existing grid should be
removed, and a new grid should be generated in the same total space as before (creating a new sketchpad). 
-- Set the limit for the user input to a maximum of 100
-- The total number of pixels used won't be changed *I don't understand this part