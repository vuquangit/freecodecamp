/*
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/chunky-monkey

Basic Algorithm Scripting: Chunky Monkey

Write a function that splits an array (first argument) into groups the length of size 
(second argument) and returns them as a two-dimensional array.

    function chunkArrayInGroups(arr, size) {
        // Break it up.
        return arr;
    }

    chunkArrayInGroups(["a", "b", "c", "d"], 2);
*/

const chunkArrayInGroups = (arr, size) => {
  let a = [];
  let arrTemp = [...arr];
  while (arrTemp.length) {
    a.push(arrTemp.splice(0, size));
  }
  return a;
};

// https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/basic-algorithm-scripting/chunky-monkey/
// function chunkArrayInGroups(arr, size) {
//     if (arr.length <= size){
//       return [arr];
//     }
//     else {
//       return [arr.slice(0,size)].concat(chunkArrayInGroups(arr.slice(size),size));
//     }
//   }

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 3));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));
