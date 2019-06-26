/*
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range

Intermediate Algorithm Scripting: Sum All Numbers in a Range

We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum 
of all the numbers between them.

The lowest number will not always come first.

    function sumAll(arr) {
        return 1;
    }

    sumAll([1, 4]);
*/

const sumAll = arr => {
  let total = 0;
  //   if (arr[0] < arr[1]) for (let i = arr[0]; i <= arr[1]; i++) total += i;
  //   else for (let i = arr[1]; i <= arr[0]; i++) total += i;

  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) total += i;

  return total;
};

console.log(sumAll([5, 10]));
console.log(sumAll([10, 5]));
