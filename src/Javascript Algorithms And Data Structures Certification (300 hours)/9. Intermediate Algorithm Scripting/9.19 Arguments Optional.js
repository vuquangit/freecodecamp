/*
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/arguments-optional

Intermediate Algorithm Scripting: Arguments Optional

Create a function that sums two arguments together. If only one argument is provided, then 
return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
Calling this returned function with a single argument will then return the sum:

    var sumTwoAnd = addTogether(2);
    sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

    function addTogether() {
        return false;
    }

    addTogether(2,3);
*/

const addTogether = (x, y = undefined) =>
  typeof x === "number"
    ? y !== undefined
      ? typeof y === "number"
        ? x + y
        : undefined
      : y => (typeof y === "number" ? x + y : undefined)
    : undefined;

console.log(addTogether(2, 3)); // 5
console.log(addTogether(2)(3)); // 5
console.log(addTogether(2, "3")); // undefined
console.log(addTogether(2)([3])); // undefined
console.log(addTogether("http://bit.ly/IqT6zt")); // undefined

// Other way
// https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/arguments-optional/
// jshint esversion: 6
function addTogether_2() {
  var args = Array.from(arguments);
  return args.some(n => typeof n !== "number")
    ? undefined
    : args.length > 1
    ? args.reduce((acc, n) => (acc += n), 0)
    : n => (typeof n === "number" ? n + args[0] : undefined);
}

console.log(addTogether_2(2, 3)); // 5
console.log(addTogether_2(2)(3)); // 5
console.log(addTogether_2("http://bit.ly/IqT6zt")); // undefined
