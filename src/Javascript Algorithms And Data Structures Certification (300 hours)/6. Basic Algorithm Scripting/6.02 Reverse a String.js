/*
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/reverse-a-string

Basic Algorithm Scripting: Reverse a String

Reverse the provided string.
You may need to turn the string into an array before you can reverse it.
Your result must be a string.
Remember to use Read-Search-Ask if you get stuck. Write your own code.

    function reverseString(str) {
        return str;
    }

    reverseString("hello");
*/

const reverseString = str =>
  str
    .split("")
    .reverse()
    .join("");

console.log(reverseString("hello"));
console.log(reverseString("Howdy"));
console.log(reverseString("Greetings from Earth"));
