/*
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sorted-union

Intermediate Algorithm Scripting: Sorted Union

Write a function that takes two or more arrays and returns a new array of unique values in the 
order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, 
but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be 
sorted in numerical order.

Check the assertion tests for examples.

    function uniteUnique(arr) {
        return arr;
    }

    uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
*/

const uniteUnique = (...arr) => {
  let [a, ...b] = arr;
  b.map(item => a.push(...item.filter(i => a.indexOf(i) === -1)));
  return a;

  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
  //return [...new Set([].concat(...arr))];
};

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
//should return [1, 3, 2, 5, 4]

console.log(uniteUnique([1, 3, 2], [1, [5]], [2, [4]]));
// should return [1, 3, 2, [5], [4]].

console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));
// should return [1, 2, 3, 5, 4, 6, 7, 8].
