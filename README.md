# jQuery Funhouse Project

Today you will write code that powers a “jQuery Funhouse”. Your funhouse has
three features:

* You can enter your name in a text box, and the funhouse will greet you.
* You can click a button to change the background color of the page to a random
  color.
* You can browse a gallery of three pictures of elephants. Clicking on one of
  the small elephant thumbnails displays the image below, at a larger size.

### Check out the demo [here](http://outoftime.github.io/jqWestinghouse/)

## We Do

First, we need to check out the project.

* On this page, click **Fork** in the top right to get your own copy
* Then open up Cloud9, and clone this repo (it’s called **jqWestinghouse**)
  into your workspace
* Open `index.html` in your project workspace.

Now we need to add some scripts to the page.

* First, jQuery. At the very bottom of the `<body>` element, *but still inside
  it*, add a tag to include the jQuery script at
  https://code.jquery.com/jquery-2.2.1.min.js
* Next, the starter code. This is some JavaScript code that Mat wrote, which
  will hook up the functions you are going to write with actions the user takes.
  It’s called `events.js`, and it is already in your project. You just need to
  add another tag to get it on the page.
* Finally, create another JavaScript file called `solution.js`. This is where
  you will write your solution code.
* Add `solution.js` to the HTML in `index.html`

## You Do

For this project, you will write three functions. Take them one at a time.

**If you get stuck, ask for help from a mentor!**

You are expected to complete and submit this project by the end of this week.
Don’t waste time!

### Function 1: Greetings, human

Write a function called `greetUser`. This function should take one parameter,
which will be whatever the user typed in the text box next to “What is your
name?”

The function should greet the user with a hello, using the (empty) paragraph
tag with ID `greeting` that is already on the page.

So, if the parameter had the value “Babar”, your function should make the
`greeting` paragraph have the text “Hello, Babar”

**Remember: we have graduated from `alert()` and `prompt()`. If you are
thinking of using either of these functions, ask a mentor for help.**

### Function 2: Elephant picker

Write a function called `switchImage`. This function will also take one
parameter, which is the address of a picture of an elephant. When the user
clicks one of the small elephant photos, your `switchImage` function will be
called with the photo’s address as the argument.

Your `switchImage` function should change the `src` attribute of another image,
the one with ID `gallery-main`, to whatever address was passed to it.

### Function 3: Wild color adventure

Write a function called `changeBackgroundColor`. This function takes no
parameters. It will be called when the user clicks the “Change the page’s
color!” button.

Your function will change the background of the page to a *random* color!

First, generate three random numbers, each between 0 and 255. These numbers
will be our values for red, green, and blue. Store each one in a different
variable.

Now we want to construct a string out of the three colors. If the colors are
33, 55, and 77, we want to construct the string `"rgb(33,55,77)"`. If
they are 1, 2, and 3, we want to construct `"rgb(1,2,3)"`.

This string is a valid value for the CSS `background-color` property. Use
jQuery to set the background color of the `<body>` element to the color value
you have generated.

## Submission

The usual:

```bash
git add .
git commit -m "jQuery Funhouse"
git push origin master
git push origin master:gh-pages
```
