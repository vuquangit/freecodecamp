/* https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/global-vs--local-scope-in-functions
Add a local variable to myOutfit function to override the value 
of outerWear with "sweater".
*/

// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  var outerWear = "sweater";

  // Only change code above this line
  return outerWear;
}

myOutfit();
