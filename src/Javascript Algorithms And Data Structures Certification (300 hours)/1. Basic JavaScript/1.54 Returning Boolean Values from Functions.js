/* https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/returning-boolean-values-from-functions

Fix the function isLess to remove the if/else statements.

function isLess(a, b) {
  // Fix this code
  if (a < b) {
    return true;
  } else {
    return false;
  }
}

// Change these values to test
isLess(10, 15);
*/

function isLess(a, b) {
  return a < b;
}

// Change these values to test
isLess(10, 15);
