/*
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/repeat-a-string-repeat-a-string

Basic Algorithm Scripting: Repeat a String Repeat a String

Repeat a given string str (first argument) for num times (second argument). Return an empty 
string if num is not a positive number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

    function repeatStringNumTimes(str, num) {
        // repeat after me
        return str;
    }

    repeatStringNumTimes("abc", 3);
*/

const repeatStringNumTimes = (str, num) => {
  let arr = "";
  for (let i = 0; i < num; i++) arr += str;
  return arr;
};

console.log(repeatStringNumTimes("abc", 3));

// https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/basic-algorithm-scripting/repeat-a-string-repeat-a-string/
// function repeatStringNumTimes(str, num) {
//   if(num < 0)
//   return "";
// if(num === 1)
//   return str;
// else
//   return str + repeatStringNumTimes(str, num - 1);
// }
