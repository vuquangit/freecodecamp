/* https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/local-scope-and-functions
Declare a local variable myVar inside myLocalScope. 
Run the tests and then follow the instructions commented out in the editor.
*/

function myLocalScope() {
  "use strict"; // you shouldn't need to edit this line
  var myVar = "hi";
  console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
//console.log(myVar);

// Now remove the console log line to pass the test
