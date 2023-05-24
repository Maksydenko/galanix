# HTML, CSS, and JS tests

## Assignment #1

Using only HTML and CSS (without pictures) to show on one page flags of states:

- Ukraine;
- Japan;
- Iceland;
- Czech Republic.

Flags are placed one below the other with small indents, the size of each flag is 300 pixels wide. It is important to observe the proportions between the elements of the flag.

## Assignment #2

**HTML+CSS:**

1. Arrange images from the task-2 folder on one page in a 4-by-3 grid with even indentation between them. The content area with the images is centered and takes up 80% of the screen width.
2. Add a dark gray border that is 5 pixels thick to the images.
3. The border of the first image in each row is red.
4. "Trim" the images so that they become circular.
5. When hovering over any image, the stroke should turn yellow and the image should rotate by 45 degrees.
6. If the width of the screen is 900 pixels or less offer your version of adaptive page layout with 2 images in a row, and if the width of 500 pixels or less - 1 in a row.

**JS:**

7. Write a script that will count the number of images on the page and display at the top of the page their number and the actual date in the format DD.MM.YYYY HH:MM.

8. \*When you click on each image in the grid:

   - in a pop-up window on top of all the content appears centered vertically and horizontally in full size;
   - also on top of the content, but there should be a semi-transparent blackout background below the big image;
   - Near the big image there should be a button, on clicking on which the big image is hidden.

   \* in this task it is not recommended to use popup photo gallery plugins, explicitly solving this problem.

**BONUS:**

9.  - place a small cross under each image in the grid;
    - when you click on it the corresponding image is removed from the list;
    - when the user deletes the pictures, we save the data about what was deleted and after reloading the page the deleted pictures should be absent on the page. How the data is stored is up to you;
    - below all the images place the "Restore" button, which makes all the images that were previously hidden by the user visible.

## Assignment #3

A small web-application that displays the data obtained from a third-party API.
Data source: http://universities.hipolabs.com, this is data on universities in different countries. The link https://github.com/Hipo/university-domains-list describes how to use this API.

The essence of the application is as follows:

1. Create a page that contains a text field, a "Submit" button, and a "Reset" button.
2. In the text field a person can write the country he is interested in (for example: Ukraine) and click on the submit button. After that, the request is made, and based on the data received, under the form is built a table with the results, corresponding to the fields that are in the json-file.
3. In addition to the fields from the received json-file, the first column in the table must have a row number.
4. The column with the link to the university's site should show the links not as text, but as a link.
5. The "Reset" button clears the text box and removes the data table from the page, returning the page to its original appearance.

**BONUS:**

6. In each row of the table, add a "Save to my list" checkbox in the last cell. Add a counter at the top of the page that shows the number of checkboxes checked.
7. Save page state, so that on reloading the table with search results, checked boxes and the counter value are saved. The way the data is stored is up to you.

**Additional information:**

- Save each task in a separate folder task-1, task-2, task-3. And then put them all into a zip-archive, which you should name in Latin as your name_family.zip;
- the background of the document is white, the rest of the colors, shades and appearance of the elements, the choice of widgets and styling is up to you;
- in tasks 2 and 3, you may use libraries and frameworks for various purposes (React, Angular, jQuery, etc.);
- instead of the usual js-code is allowed to use ES6 standard or TypeScript;
- the structure of additional folders and files created in the framework of the job, their number, as well as additional development tools (builders, package managers, compilers, etc.) - at your discretion;
- if you need to build or compile a web application, describe a brief readme file describing the clear steps to run it.

**Welcome:**

- clean and well-structured and documented code;
- judicious use of html tags;
- smooth hover effects, interesting animations, etc. "chips" that in your opinion would be appropriate to add to the tasks;
- the cross-browser nature of the given solution, including support for mobile devices and older versions of browsers.
