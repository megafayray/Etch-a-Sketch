The Odin Project Foundations Course
Project: Etch-a-Sketch

Using DOM manipulation, create a browser version of something between
a sketchpad and an Etch-a-Sketch

Lessons learned, knowledge solidified:
- Use "defer" in the html link to js. If you don't use "defer" the Javascript is loaded before the HTML, so the element you're trying to access doesn't exist in the DOM yet, which will throw a "Uncaught TypeError: Cannot read property 'appendChild' of null"
- Create a square div by setting height to whatever, then "aspect-ratio: 1/1;"
- Use "box-sizing: border-box" to account for any border or padding IN the values specified for the elements width and height

DONE:
- Set up GitHub repo
- Created index.html, main.css, main.js
- Created a webpage with a 16x16 grid of square divs using Javascript
-- Created a container div in html to hold the squares
-- Used Flexbox to make the square divs in a grid (vs. one on each line)
-Create button that prompts the user for the number of squares per side to create a new grid. 
-- Limited the number for the user input to a maximum of 100
-- The size of the container is unchanged(the total number of pixels used is unchanged)
--Before anything else, on button click, remove the previously created child div elements from the container element
- Set up a hover effect so that the grid divs change colour when your mouse passes over them, leaving a pixelated trail through the grid
-Remove "border: dashed red;" from the div attributes (I used this while testing to distinguish the individual divs from each other)

TO DO: