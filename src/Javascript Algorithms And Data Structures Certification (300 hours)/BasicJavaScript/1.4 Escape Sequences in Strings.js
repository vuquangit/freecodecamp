/* 
Code	   Output
\'	    single quote
\"	    double quote
\\	    backslash
\n	    newline
\r	    carriage return
\t	    tab
\b	    backspace
\f	    form feed


Assign the following three lines of text into the single variable myStr using escape sequences.

FirstLine
    \SecondLine
ThirdLine

You will need to use escape sequences to insert special characters correctly. You will also need to follow the spacing as it looks above, with no spaces between escape sequences or words.
Here is the text with the escape sequences written out.
"FirstLine newline tab backslash Second Line newline ThirdLine"
var myStr; // Change this line
*/

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";

console.log(myStr);
