/*
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/diff-two-arrays

Intermediate Algorithm Scripting: Diff Two Arrays

Compare two arrays and return a new array with any items only found in one of the two 
given arrays, but not both. In other words, return the symmetric difference of the two arrays.

    function diffArray(arr1, arr2) {
        var newArr = [];
        // Same, same; but different.
        return newArr;
    }

    diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
*/

const diffArray = (arr1, arr2) =>
  [...arr1, ...arr2].filter((item, index) =>
    index < arr1.length ? arr2.indexOf(item) < 0 : arr1.indexOf(item) < 0
  );

console.log(diffArray([1, 2, 3, 5, 7], [1, 2, 3, 4, 5, 6])); // [7,4,6]
console.log(
  diffArray(
    ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]
  )
); //["pink wool"]
