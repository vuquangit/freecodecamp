/*
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/convert-html-entities

Intermediate Algorithm Scripting: Convert HTML Entities

Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their 
corresponding HTML entities.

    function convertHTML(str) {
        // &colon;&rpar;
        return str;
    }

    convertHTML("Dolce & Gabbana");

*/

const convertHTML = str => {
  const entities = {
    "&": "&​amp;",
    "<": "&​lt;",
    ">": "&​gt;",
    '"': "&​quot;",
    "'": "&​apos;"
  };

  return str
    .split("")
    .map(item => entities[item] || item)
    .join("");
};

console.log(convertHTML("Dolce & Gabbana"));
// should return Dolce &​amp; Gabbana

console.log(convertHTML('Stuff in "quotation marks"'));
// should return Stuff in &​quot;quotation marks&​quot;

console.log(convertHTML("<>"));
// should return &​lt;&​gt;
