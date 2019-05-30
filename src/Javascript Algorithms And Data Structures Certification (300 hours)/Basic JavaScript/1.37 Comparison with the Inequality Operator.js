/* https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-inequality-operator

Examples
1 != 2 // true
1 != "1" // false
1 != '1' // false
1 != true // false
0 != false // false

Add the inequality operator != in the if statement so that the function will 
return "Not Equal" when val is not equivalent to 99

// Setup
function testNotEqual(val) {
  if (val) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
testNotEqual(10);
*/

// Setup
function testNotEqual(val) {
  if (val != 99) {
    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
console.log(testNotEqual("99"));
