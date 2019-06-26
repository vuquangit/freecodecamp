/*
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/everything-be-true

Intermediate Algorithm Scripting: Everything Be True

Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

In other words, you are given an array collection of objects. The predicate pre will be an 
object property and you need to return true if its value is truthy. Otherwise, return false.

In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

Remember, you can access object properties through either dot notation or [] notation.

    function truthCheck(collection, pre) {
        // Is everyone being true?
        return pre;
    }

    truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, 
    {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

*/

const truthCheck = (collection, pre) =>
  Object.keys(collection).reduce(
    (acc, val) => (collection[val][pre] ? acc && true : false),
    true
  );

// https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/everything-be-true/
// const truthCheck = (collection, pre) => collection.every(obj => obj[pre]);

console.log(
  truthCheck(
    [
      { user: "Tinky-Winky", sex: "male" },
      { user: "Dipsy", sex: "male" },
      { user: "Laa-Laa", sex: "female" },
      { user: "Po", sex: "female" }
    ],
    "sex"
  )
); // true

console.log(truthCheck([{ single: "yes" }], "single")); // true
console.log(truthCheck([{ single: "" }, { single: "double" }], "single")); // false
console.log(
  truthCheck([{ single: "double" }, { single: undefined }], "single")
); // false
