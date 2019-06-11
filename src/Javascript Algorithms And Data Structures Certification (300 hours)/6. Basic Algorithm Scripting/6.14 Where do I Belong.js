/*
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/where-do-i-belong

Basic Algorithm Scripting: Where do I Belong

Return the lowest index at which a value (second argument) should be inserted into an 
array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 
(index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted 
it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

    function getIndexToIns(arr, num) {
        // Find my place in this sorted array.
        return num;
    }

    getIndexToIns([40, 60], 50);

*/

const getIndexToIns = (arr, num) =>
  Math.max(...arr) > num
    ? arr
        .sort((a, b) => a - b)
        .reduce(
          (acc, value, index, arrSort) =>
            num > value && num <= arrSort[index + 1] ? index + 1 : acc,
          0
        )
    : arr.length;

//https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/basic-algorithm-scripting/where-do-i-belong/
//const getIndexToIns = (arr, num) => arr.concat(num).sort((a,b) => a-b).indexOf(num);

console.log(getIndexToIns([1, 2, 3, 4], 1.5)); //1
console.log(getIndexToIns([20, 3, 5], 19)); //2
console.log(getIndexToIns([7, 4, 6], 5)); //2
console.log(getIndexToIns([2, 22, 10], 19)); // 2
console.log(getIndexToIns([10, 20, 30, 40, 50], 35)); //3
console.log(getIndexToIns([5, 3, 20, 3], 2)); //0
console.log(getIndexToIns([2, 5, 10], 15)); //3
