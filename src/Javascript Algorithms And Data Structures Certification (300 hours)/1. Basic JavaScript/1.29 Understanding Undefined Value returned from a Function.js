/* https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/understanding-undefined-value-returned-from-a-function
Create a function addFive without any arguments. 
This function adds 5 to the sum variable, but its returned value is undefined.
*/

// Example
var sum = 0;
function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum = sum + 5;
}

// Only change code above this line
var returnedValue = addFive();
