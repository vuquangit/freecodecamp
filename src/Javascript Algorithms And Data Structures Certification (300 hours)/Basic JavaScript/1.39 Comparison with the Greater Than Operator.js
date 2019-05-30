/* 
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-greater-than-operator

Examples
5 > 3 // true
7 > '3' // true
2 > 3 // false
'1' > 9 // false

Add the greater than operator to the indicated lines so that the return statements make sense.
function testGreaterThan(val) {
  if (val) {  // Change this line
    return "Over 100";
  }
  
  if (val) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

// Change this value to test
testGreaterThan(10);
*/

function testGreaterThan(val) {
  if (val > 100) {
    return "Over 100";
  }

  if (val > 10) {
    return "Over 10";
  }

  return "10 or Under";
}

// Change this value to test
testGreaterThan(50);
