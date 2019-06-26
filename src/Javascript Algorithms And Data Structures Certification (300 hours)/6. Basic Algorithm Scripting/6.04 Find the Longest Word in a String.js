/*
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/find-the-longest-word-in-a-string

Basic Algorithm Scripting: Find the Longest Word in a String

Return the length of the longest word in the provided sentence.
Your response should be a number.
Remember to use Read-Search-Ask if you get stuck. Write your own code.

    function findLongestWordLength(str) {
        return str.length;
    }

    findLongestWordLength("The quick brown fox jumped over the lazy dog");
*/

const findLongestWordLength = str =>
  str
    .split(" ")
    .reduce(
      (acc, current) => (current.length > acc ? (acc = current.length) : acc),
      0
    );

// https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/basic-algorithm-scripting/find-the-longest-word-in-a-string/
// function findLongestWordLength(s) {
//   return s.split(" ").reduce(function(x, y) {
//     return Math.max(x, y.length);
//   }, 0);
// }

findLongestWordLength("The quick brown fox jumped over the lazy dog");
