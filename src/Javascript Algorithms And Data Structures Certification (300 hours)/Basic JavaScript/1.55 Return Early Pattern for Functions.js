/* https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/return-early-pattern-for-functions

Modify the function abTest so that if a or b are less than 0 the function 
will immediately exit with a value of undefined.

// Setup
function abTest(a, b) {
  // Only change code below this line
  
  
  
  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

// Change values below to test your code
abTest(2,2);

*/

// Setup
function abTest(a, b) {
  // Only change code below this line
  if (a < 0 || b < 0) return;
  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

// Change values below to test your code
abTest(2, 2);
