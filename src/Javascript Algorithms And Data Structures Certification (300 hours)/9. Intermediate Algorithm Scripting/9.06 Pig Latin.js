/*
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin

Intermediate Algorithm Scripting: Pig Latin

Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, 
moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.

    function translatePigLatin(str) {
        return str;
    }

    translatePigLatin("consonant");
*/

//https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin/
const translatePigLatin = str => {
  const checkVowel = index =>
    "ueoai".indexOf(str.charAt(index)) === -1 ? checkVowel(index + 1) : index;

  return str
    .substr(checkVowel(0))
    .concat(checkVowel(0) === 0 ? "w" : str.substr(0, checkVowel(0)))
    .concat("ay");
};

console.log(translatePigLatin("california")); // "aliforniacay"
console.log(translatePigLatin("paragraphs")); // "aragraphspay"
console.log(translatePigLatin("glove")); // "oveglay"
console.log(translatePigLatin("algorithm")); //"algorithmway"
