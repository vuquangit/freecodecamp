/*
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/title-case-a-sentence

Basic Algorithm Scripting: Title Case a Sentence

Return the provided string with the first letter of each word capitalized. Make sure the rest 
of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

    function titleCase(str) {
        return str;
    }

    titleCase("I'm a little tea pot");
*/

const titleCase = str =>
  str
    .split(" ")
    .map(item => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase())
    .join(" ");

// https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/basic-algorithm-scripting/title-case-a-sentence/
// function titleCase(str) {
//   return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
// }

console.log(titleCase("I'm a little tea pot"));
