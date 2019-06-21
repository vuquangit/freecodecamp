/*
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/steamroller

Intermediate Algorithm Scripting: Steamroller

Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
  // I'm a steamroller, baby
  return arr;
}

steamrollArray([1, [2], [3, [[4]]]]);
*/

// https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/steamroller/
const steamrollArray = arr => {
  let flat = [].concat(...arr);
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
};
console.log(steamrollArray([1, [2], [3, [[4]]], {}, []]));
//should return [1, 2, 3, 4, {}]

console.log(steamrollArray([[["a"]], [["b"]]]));
// should return ["a", "b"]

const steamrollArray_2 = arr =>
  arr
    .toString()
    .replace(",,", ",") // "1,2,,3" => "1,2,3"
    .split(",") // ['1','2','3']
    .map(function(v) {
      if (v == "[object Object]") {
        // bring back empty objects
        return {};
      } else if (isNaN(v)) {
        // if not a number (string)
        return v;
      } else {
        return parseInt(v); // if a number in a string, convert it
      }
    });

console.log(steamrollArray_2([1, [], {}, "a", [3, [[4]]]]));
// should return [1, {}, 3, 4]
