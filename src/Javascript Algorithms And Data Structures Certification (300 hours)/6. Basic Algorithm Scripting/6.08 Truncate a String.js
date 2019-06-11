/*
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/truncate-a-string

Basic Algorithm Scripting: Truncate a String

Truncate a string (first argument) if it is longer than the given maximum string length 
(second argument). Return the truncated string with a ... ending.

    function truncateString(str, num) {
        // Clear out that junk in your trunk
        return str;
    }

    truncateString("A-tisket a-tasket A green and yellow basket", 8);

*/

const truncateString = (str, num) =>
  str.slice(0, num).concat(str.length > num ? "..." : "");

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(
  truncateString(
    "A-tisket a-tasket A green and yellow basket",
    "A-tisket a-tasket A green and yellow basket".length + 2
  )
);
console.log(truncateString("A-", 1));
