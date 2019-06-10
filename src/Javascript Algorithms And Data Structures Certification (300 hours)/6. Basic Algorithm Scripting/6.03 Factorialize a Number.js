/*
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/factorialize-a-number

Basic Algorithm Scripting: Factorialize a Number

Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive 
integers less than or equal to n.
Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Only integers greater than or equal to zero will be supplied to the function.
Remember to use Read-Search-Ask if you get stuck. Write your own code.

    function factorialize(num) {
        return num;
    }

    factorialize(5);

*/

function factorialize(num) {
  if (Number.isInteger(num)) {
    let fac = 1;
    for (let i = 1; i <= num; i++) fac = fac * i;
    return fac;
  }
  return "Input is not a integer number";

  // if (num === 0) { return 1; }
  // return num * factorialize(num-1);
}

console.log(factorialize(5));
console.log(factorialize(20));
console.log(factorialize("sad"));
