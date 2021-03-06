/*
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming/return-a-sorted-array-without-changing-the-original-array

Functional Programming: Return a Sorted Array Without Changing the Original Array

A side effect of the sort method is that it changes the order of the elements in the 
original array. In other words, it mutates the array in place. One way to avoid this is to 
first concatenate an empty array to the one being sorted (remember that concat returns a 
new array), then run the sort method.

------------------------------------------------------------------------------------------------
Use the sort method in the nonMutatingSort function to sort the elements of an array in 
ascending order. The function should return a new array, and not mutate the globalArray variable.

    var globalArray = [5, 6, 3, 2, 9];
    function nonMutatingSort(arr) {
        // Add your code below this line
        
        
        // Add your code above this line
    }
    nonMutatingSort(globalArray);

*/

const globalArray = [5, 6, 3, 2, 9];
nonMutatingSort_1 = arr => [].concat(arr).sort((a, b) => a - b);
nonMutatingSort_2 = arr => [...arr].sort((a, b) => a - b);

console.log(nonMutatingSort_1(globalArray));
console.log(globalArray);

console.log(nonMutatingSort_2(globalArray));
console.log(globalArray);
