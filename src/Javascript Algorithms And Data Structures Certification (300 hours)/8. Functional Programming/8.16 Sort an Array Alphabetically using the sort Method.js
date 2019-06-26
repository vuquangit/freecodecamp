/*
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming/sort-an-array-alphabetically-using-the-sort-method

Functional Programming: Sort an Array Alphabetically using the sort Method

The sort method sorts the elements of an array according to the callback function.

For example:

    function ascendingOrder(arr) {
        return arr.sort(function(a, b) {
            return a - b;
        });
    }
    ascendingOrder([1, 5, 2, 3, 4]);
    // Returns [1, 2, 3, 4, 5]

    function reverseAlpha(arr) {
        return arr.sort(function(a, b) {
            return a < b;
        });
    }
    reverseAlpha(['l', 'h', 'z', 'b', 's']);
    // Returns ['z', 's', 'l', 'h', 'b']

Note: It's encouraged to provide a callback function to specify how to sort the array items. 
JavaScript's default sorting method is by string Unicode point value, which may return unexpected results.

----------------------------------------------------------------------------------------
Use the sort method in the alphabeticalOrder function to sort the elements of arr in alphabetical order.

    function alphabeticalOrder(arr) {
        // Add your code below this line
        return arr.sort( (a,b) => a > b);  
        // Add your code above this line
    }
    alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

*/

alphabeticalOrder = arr => arr.sort();
console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));
