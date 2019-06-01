/* https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-strict-inequality-operator
Examples
3 !== 3 // false
3 !== '3' // true
4 !== 3 // true

Add the strict inequality operator to the if statement so the function will return "Not Equal" 
when val is not strictly equal to 17

// Setup
function testStrictNotEqual(val) {
  // Only Change Code Below this Line
  
  if (val) {

  // Only Change Code Above this Line

    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
testStrictNotEqual(10);

*/

// Setup
function testStrictNotEqual(val) {
  // Only Change Code Below this Line

  if (val !== 17) {
    // Only Change Code Above this Line

    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
testStrictNotEqual(10);
