/*
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/confirm-the-ending

Basic Algorithm Scripting: Confirm the Ending

Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. 
But for the purpose of this challenge, we would like you to use one of the JavaScript substring 
methods instead.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

    function confirmEnding(str, target) {
        // "Never give up and good luck will find you."
        // -- Falcor
        return str;
    }

    confirmEnding("Bastian", "n");
*/

//const confirmEnding = (str, target) => str.endsWith(target);

const confirmEnding = (str, target) =>
  target
    .split("")
    .reverse()
    .reduce(
      (acc, currentValue, currentIndex) =>
        currentValue === [...str.split("").reverse()][currentIndex] &&
        acc === true,
      true
    );

// https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/basic-algorithm-scripting/confirm-the-ending/
// function confirmEnding(str, target) {
//         // "Never give up and good luck will find you."
//         // -- Falcor
//         return str.slice(str.length - target.length) === target; // @_@!!!
// }

console.log(confirmEnding("Batian", "n"));
console.log(confirmEnding("Bastian", "an"));
console.log(confirmEnding("Bastian", "0n"));
console.log(
  confirmEnding(
    "If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing",
    "mountain"
  )
);
console.log(confirmEnding("Abstraction", "Action"));
