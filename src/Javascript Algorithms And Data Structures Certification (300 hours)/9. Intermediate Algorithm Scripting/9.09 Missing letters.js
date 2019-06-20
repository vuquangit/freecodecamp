/*
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/missing-letters

Intermediate Algorithm Scripting: Missing letters

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

    function fearNotLetter(str) {
        return str;
    }

    fearNotLetter("abce");
*/

const fearNotLetter = str => {
  let index = 0;
  let missArr = [];
  for (let i = str.charCodeAt(0); i <= str.charCodeAt(str.length - 1); i++) {
    if (String.fromCharCode(i) !== str.charAt(index)) {
      missArr.push(String.fromCharCode(i));
    } else index++;
  }
  missArr = missArr.join("");
  return missArr ? missArr : undefined;
};

console.log(fearNotLetter("abce")); // should return "d"
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")); //should return undefined

// https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/missing-letters/
//   function fearNotLetter(str) {
//     for (let i = 1; i < str.length; ++i) {
//       if (str.charCodeAt(i) - str.charCodeAt(i-1) > 1) {
//         return String.fromCharCode(str.charCodeAt(i - 1) + 1);
//       }
//     }
//   }
