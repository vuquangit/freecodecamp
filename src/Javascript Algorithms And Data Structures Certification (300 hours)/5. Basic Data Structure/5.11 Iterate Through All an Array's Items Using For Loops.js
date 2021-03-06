/*
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-data-structures/iterate-through-all-an-arrays-items-using-for-loops

Basic Data Structures: Iterate Through All an Array's Items Using For Loops

Sometimes when working with arrays, it is very handy to be able to iterate through each item 
to find one or more elements that we might need, or to manipulate an array based on which 
data items meet a certain set of criteria. JavaScript offers several built in methods that 
each iterate over arrays in slightly different ways to achieve different results (such as 
every(), forEach(), map(), etc.), however the technique which is most flexible and offers 
us the greatest amount of control is a simple for loop.

Consider the following:

    function greaterThanTen(arr) {
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > 10) {
                newArr.push(arr[i]);
            }
        }
        return newArr;
    }

    greaterThanTen([2, 12, 8, 14, 80, 0, 1]);
    // returns [12, 14, 80]

Using a for loop, this function iterates through and accesses each element of the array, 
and subjects it to a simple test that we have created. In this way, we have easily and 
programmatically determined which data items are greater than 10, and returned a new array 
containing those items.

---------------------------------------------------------------------------------------------
We have defined a function, filteredArray, which takes arr, a nested array, and elem as 
arguments, and returns a new array. elem represents an element that may or may not be 
present on one or more of the arrays nested within arr. Modify the function, using a for 
loop, to return a filtered version of the passed array such that any array nested within 
arr containing elem has been removed.

    function filteredArray(arr, elem) {
        let newArr = [];
        // change code below this line

        // change code above this line
        return newArr;
    }

    // change code here to test different cases:
    console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
*/

function filteredArray_1(arr, elem) {
  let newArr = [];
  // change code below this line
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) == -1) {
      newArr.push(arr[i]);
    }
  }
  // change code above this line
  return newArr;
}

function filteredArray_2(arr, elem) {
  let newArr = [];
  // change code below this line
  newArr = arr;
  for (let i = newArr.length - 1; i >= 0; i--) {
    for (let j = 0; j < newArr[i].length; j++) {
      if (newArr[i][j] === elem) {
        newArr.splice(i, 1);
        break;
        // newArr.push(arr[i]); //set newArr = []
      }
    }
  }
  // change code above this line
  return newArr;
}

const filteredArray = (arr, elem) => arr.filter(item => item.indexOf(elem) < 0);

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));
console.log(
  filteredArray([["trumpets", 2], ["flutes", 4], ["saxophones", 2]], 2)
);
console.log(
  filteredArray([["amy", "beth", "sam"], ["dave", "sean", "peter"]], "peter")
);
