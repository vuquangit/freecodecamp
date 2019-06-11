/* 
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/mutations

Basic Algorithm Scripting: Mutations

Return true if the string in the first element of the array contains all of the letters of 
the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second 
string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are 
present in "Alien".

    function mutation(arr) {
        return arr;
    }

    mutation(["hello", "hey"]);
*/

const mutation = arr => {
  arr = arr.map(i => i.toLowerCase());
  for (let i = 0; i < arr[1].length; i++)
    if (!arr[0].includes(arr[1][i])) return false;
  return true;
};

// https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/basic-algorithm-scripting/mutations/
// function mutation(arr) {
//     var test = arr[1].toLowerCase();
//     var target = arr[0].toLowerCase();
//     for (var i=0;i<test.length;i++) {
//       if (target.indexOf(test[i]) < 0)
//         return false;
//     }
//     return true;
//    }
//
//   function mutation(arr) {
//       return arr[1].toLowerCase()
//         .split('')
//         .every(function(letter) {
//           return arr[0].toLowerCase()
//             .indexOf(letter) != -1;
//         });
//     }

console.log(mutation(["HelLo", "hey"]));
console.log(mutation(["hello", "Hello"]));
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
console.log(mutation(["Mary", "Aarmy"]));
