/*
https://learn.freecodecamp.org/front-end-libraries/sass/create-reusable-css-with-mixins

Sass: Create Reusable CSS with Mixins

In Sass, a mixin is a group of CSS declarations that can be reused throughout the style sheet.

Newer CSS features take time before they are fully adopted and ready to use in all browsers. 
As features are added to browsers, CSS rules using them may need vendor prefixes. 
Consider "box-shadow":

div {
  -webkit-box-shadow: 0px 0px 4px #fff;
  -moz-box-shadow: 0px 0px 4px #fff;
  -ms-box-shadow: 0px 0px 4px #fff;
  box-shadow: 0px 0px 4px #fff;
}

It's a lot of typing to re-write this rule for all the elements that have a box-shadow, 
or to change each value to test different effects.

Mixins are like functions for CSS. Here is how to write one:

@mixin box-shadow($x, $y, $blur, $c){ 
  -webkit-box-shadow: $x, $y, $blur, $c;
  -moz-box-shadow: $x, $y, $blur, $c;
  -ms-box-shadow: $x, $y, $blur, $c;
  box-shadow: $x, $y, $blur, $c;
}
The definition starts with @mixin followed by a custom name. The parameters (the $x, $y,
     $blur, and $c in the example above) are optional.

Now any time a box-shadow rule is needed, only a single line calling the mixin replaces 
having to type all the vendor prefixes. A mixin is called with the @include directive:

div {
  @include box-shadow(0px, 0px, 4px, #fff);
}

Write a mixin for border-radius and give it a $radius parameter. It should use all the 
vendor prefixes from the example. Then use the border-radius mixin to give the #awesome 
element a border radius of 15px.

<style type='text/sass'>
  
  
  
  #awesome {
    width: 150px;
    height: 150px;
    background-color: green;
    
  }
</style>

<div id="awesome"></div>
  
*/

import React from "react";
import "./3.03 Create Reusable CSS with Mixins.sass";

class sass_02 extends React.Component {
  render() {
    return <div id="awesome" />;
  }
}
export default sass_02;
