/*--
https://learn.freecodecamp.org/front-end-libraries/sass/store-data-with-sass-variables

Sass: Store Data with Sass Variables

One feature of Sass that's different than CSS is it uses variables. They are declared and set to store data, similar to JavaScript.

In JavaScript, variables are defined using the let and const keywords. In Sass, variables start with a $ followed by the variable name.

Here are a couple examples:

$main-fonts: Arial, sans-serif;
$headings-color: green;

//To use variables:
h1 {
  font-family: $main-fonts;
  color: $headings-color;
}
One example where variables are useful is when a number of elements need to be the same color. If that color is changed, the only place to edit the code is the variable value.


Create a variable $text-color and set it to red. Then change the value of the color property for the .blog-post and h2 to the $text-color variable.

<style type='text/sass'>
  
  
  .header{
    text-align: center;
  }
  .blog-post, h2 {
    color: red;
  }
</style>

<h1 class="header">Learn Sass</h1>
<div class="blog-post">
  <h2>Some random title</h2>
  <p>This is a paragraph with some random text in it</p>
</div>
<div class="blog-post">
  <h2>Header #2</h2>
  <p>Here is some more random text.</p>
</div>
<div class="blog-post">
  <h2>Here is another header</h2>
  <p>Even more random text within a paragraph</p>
</div>
-->

<!-- <link
  rel="stylesheet"
  type="text/css"
  href="3.01 Store Data with Sass Variables.css"
*/

import React from "react";
import "./3.01 Store Data with Sass Variables.sass";

class sass_01 extends React.Component {
  render() {
    return (
      <div className="sass-01">
        <h1 className="header">Learn Sass</h1>
        <div className="blog-post">
          <h2>Some random title</h2>
          <p>This is a paragraph with some random text in it</p>
        </div>
        <div className="blog-post">
          <h2>Header #2</h2>
          <p>Here is some more random text.</p>
        </div>
        <div className="blog-post">
          <h2>Here is another header</h2>
          <p>Even more random text within a paragraph</p>
        </div>
      </div>
    );
  }
}
export default sass_01;
