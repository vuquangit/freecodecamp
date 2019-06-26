/*
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/wherefore-art-thou

Intermediate Algorithm Scripting: Wherefore art thou

Make a function that looks through an array of objects (first argument) and returns an array of all 
objects that have matching name and value pairs (second argument). Each name and value pair of the 
source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, 
{ first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return 
the third object from the array (the first argument), because it contains the name and its value, that 
was passed on as the second argument.

    function whatIsInAName(collection, source) {
        // What's in a name?
        var arr = [];
        // Only change code below this line


        // Only change code above this line
        return arr;
    }

    whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, 
    { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

*/

// By vuquangit
const whatIsInAName = (collection, source) =>
  collection.filter(item =>
    Object.keys(source).reduce(
      (acc, value) =>
        !item.hasOwnProperty(value)
          ? false
          : acc !== false && item[value] === source[value],
      true
    )
  );

//Other way: https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/wherefore-art-thou/
function whatIsInAName_2(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  var srcKeys = Object.keys(source);

  return collection.filter(function(obj) {
    return srcKeys.every(function(key) {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
}
function whatIsInAName_3(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  var srcKeys = Object.keys(source);

  // filter the collection
  return collection.filter(function(obj) {
    return srcKeys
      .map(function(key) {
        return obj.hasOwnProperty(key) && obj[key] === source[key];
      })
      .reduce(function(a, b) {
        return a && b;
      });
  });
}

console.log(
  whatIsInAName(
    [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
    { apple: 1, bat: 2 }
  )
);
// should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]

console.log(
  whatIsInAName([{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }], {
    apple: 1
  })
);
//should return [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }].

console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" }
    ],
    { last: "Capulet" }
  )
); //return  [{ first: "Tybalt", last: "Capulet" }]
