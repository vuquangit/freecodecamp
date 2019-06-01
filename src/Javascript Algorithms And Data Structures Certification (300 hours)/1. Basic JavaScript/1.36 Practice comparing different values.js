/*
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/practice-comparing-different-values
The compareEquality function in the editor compares two values using the equality operator. 
Modify the function so that it returns "Equal" only when the values are strictly equal.

// Setup
function compareEquality(a, b) {
  if (a == b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
compareEquality(10, "10");
*/

// Setup
function compareEquality(a, b) {
  if (a === b) {
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
compareEquality(10, "10");
