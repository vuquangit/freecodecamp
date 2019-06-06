/*
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/regular-expressions/match-all-numbers

Regular Expressions: Match All Numbers

You've learned shortcuts for common string patterns like alphanumerics. Another common pattern 
is looking for just digits or numbers.

The shortcut to look for digit characters is \d, with a lowercase d. This is equal to the character 
class [0-9], which looks for a single character of any number between zero and nine.

---------------------------------------------------------------------------------------------------
Use the shorthand character class \d to count how many digits are in movie titles. Written out 
numbers ("six" instead of 6) do not count.

    let numString = "Your sandwich will be $5.00";
    let numRegex = /change/; // Change this line
    let result = numString.match(numRegex).length;
*/

let numString = "Your sandwich will be $5.00";
let numRegex = /\d/g; // Change this line
let result = numString.match(numRegex).length;
