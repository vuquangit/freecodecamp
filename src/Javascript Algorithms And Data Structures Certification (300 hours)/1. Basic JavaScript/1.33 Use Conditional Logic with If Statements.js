/* https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/use-conditional-logic-with-if-statements
Create an if statement inside the function to return "Yes, that was true" 
if the parameter wasThatTrue is true and return "No, that was false" otherwise.

// Example
function ourTrueOrFalse(isItTrue) {
  if (isItTrue) { 
    return "Yes, it's true";
  }
  return "No, it's false";
}

// Setup
function trueOrFalse(wasThatTrue) {

  // Only change code below this line.
  
  
  
  // Only change code above this line.

}

// Change this value to test
trueOrFalse(true);
*/

// Example
function ourTrueOrFalse(isItTrue) {
  if (isItTrue) {
    return "Yes, it's true";
  }
  return "No, it's false";
}

// Setup
function trueOrFalse(wasThatTrue) {
  // Only change code below this line.
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
  // Only change code above this line.
}

// Change this value to test
trueOrFalse(true);
