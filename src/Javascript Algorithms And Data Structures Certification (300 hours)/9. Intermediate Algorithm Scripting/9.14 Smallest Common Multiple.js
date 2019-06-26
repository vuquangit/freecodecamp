/*
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/smallest-common-multiple

Intermediate Algorithm Scripting: Smallest Common Multiple
Find the smallest common multiple of the provided parameters that can be evenly divided by both, 
as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also 
evenly divisible by all numbers between 1 and 3. The answer here would be 6.

    function smallestCommons(arr) {
        return arr;
    }

    smallestCommons([1,5]);

*/

const smallestCommons = arr => {
  if (Math.min(...arr) === 0) return 0;
  const check = n => {
    for (let i = Math.min(...arr); i <= Math.max(...arr); i++)
      if (!Number.isInteger(n / i)) return false;
    return true;
  };
  let sc = 1;
  while (!check(sc)) {
    sc++;
  }
  return sc;
};

console.log(smallestCommons([1, 5])); // 60
console.log(smallestCommons([5, 1])); // 60
console.log(smallestCommons([2, 10])); // 2520
console.log(smallestCommons([1, 13])); // 360360
console.log(smallestCommons([23, 18])); /// 6056820
console.log(smallestCommons([0, 18])); //0
