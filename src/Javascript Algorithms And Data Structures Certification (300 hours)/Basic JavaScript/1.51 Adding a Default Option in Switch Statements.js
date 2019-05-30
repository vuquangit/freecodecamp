/* https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/adding-a-default-option-in-switch-statements

Write a switch statement to set answer for the following conditions:
"a" - "apple"
"b" - "bird"
"c" - "cat"
default - "stuff"

function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
  
  
  
  // Only change code above this line  
  return answer;  
}

// Change this value to test
switchOfStuff(1);

*/

function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
      break;
  }
  // Only change code above this line
  return answer;
}

// Change this value to test
switchOfStuff(1);
