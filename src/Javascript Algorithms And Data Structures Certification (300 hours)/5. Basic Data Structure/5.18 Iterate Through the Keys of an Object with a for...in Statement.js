/*
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-data-structures/-iterate-through-the-keys-of-an-object-with-a-for---in-statement

Basic Data Structures: Iterate Through the Keys of an Object with a for...in Statement

Sometimes you may need to iterate through all the keys within an object. This requires a 
specific syntax in JavaScript called a for...in statement. For our users object, this could 
look like:

    for (let user in users) {
        console.log(user);
    };

    // logs:
    Alan
    Jeff
    Sarah
    Ryan

In this statement, we defined a variable user, and as you can see, this variable was reset 
during each iteration to each of the object's keys as the statement looped through the object, 
resulting in each user's name being printed to the console.

NOTE:
Objects do not maintain an ordering to stored keys like arrays do; thus a keys position on 
an object, or the relative order in which it appears, is irrelevant when referencing or 
accessing that key.


We've defined a function, countOnline; use a for...in statement within this function to 
loop through the users in the users object and return the number of users whose online 
property is set to true.

    let users = {
        Alan: {
            age: 27,
            online: false
        },
        Jeff: {
            age: 32,
            online: true
        },
        Sarah: {
            age: 48,
            online: false
        },
        Ryan: {
            age: 19,
            online: true
        }
    };

    function countOnline(obj) {
    // change code below this line

    // change code above this line
    }

    console.log(countOnline(users));

*/

let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  },
  Ryan3: {
    age: 19,
    online: true
  }
};

//   function countOnline(obj) {
//     // change code below this line
//     let total=0;
//     for (let i in obj) {
//       if (obj[i].online===true)
//          total++;
//     }
//     return total;
//     // change code above this line
//   }

const countOnline = obj =>
  Object.keys(obj).reduce(
    (acc, key) => (obj[key].online === true ? (acc = acc + 1) : acc),
    0
  );

console.log(countOnline(users));
