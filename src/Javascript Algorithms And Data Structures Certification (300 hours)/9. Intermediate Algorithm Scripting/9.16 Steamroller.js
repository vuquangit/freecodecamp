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

function steamrollArray(arr) {
  console.log(arr.length);
  console.log(typeof arr[0]);
  console.log(typeof arr[1]);
  console.log(typeof arr[2]);
  console.log(typeof arr[3]);

  console.log(arr);

  return typeof arr === "object"
    ? arr.reduce((acc, value, index) => {
        return typeof value === "object"
          ? steamrollArray(...value)
          : [...acc, value];
      }, [])
    : arr;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
