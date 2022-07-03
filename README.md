1) Explain what does the simple List component does?
  - List component renders all the values of text that is available and display it as an unordered list.
  - On clicking over any element of list, onClickHandler function gets executed and it will trigger handleClick function. 'handleClick' function will then set the value of selectedIndex as the index of list element that was clicked. Then backgroundColor style property will get changed and set the background-color as directed (Red/Green). 

2) What problems / warnings is there with code?
  - useState hook should be defined with correct syntax.
  - items.text should have some values to display.
  - map function should 'return' something.
  - In propTypes array and shapeOf shoud be replaced with arrayOf and shape respectively.

3) Please fix and optimize the component as much as you can think of considering best practices.
  - All Styles can be put in one file.
  - Content of items can be put inside one file, i.e., Data.js
  - In case if we plan to put more components in our application then we can put them in separate files.
