/*
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter

JavaScript Algorithms and Data Structures Projects: Roman Numeral Converter

Convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case.

    function convertToRoman(num) {
        return num;
    }

    convertToRoman(36);

*/

const convertToRoman = num => {
  if (num >= 5000) return undefined;
  const roman = {
    I: "1",
    V: "5",
    X: "10",
    L: "50",
    C: "100",
    D: "500",
    M: "1000"
  };
  const keyRoman = val => Object.keys(roman).find(key => roman[key] === val);

  const findRoman = n => {
    if (n === 1) return "I";
    return Object.values(roman).reduce((acc, value, index, arr) => {
      let subRoman =
        arr[value.toString().startsWith("5") ? index - 1 : index - 2];
      return n >= arr[index] - subRoman && n < value
        ? keyRoman(subRoman).concat(keyRoman(arr[index]))
        : n >= value
        ? keyRoman(value)
        : acc;
    }, "");
  };

  let romans = "";
  let temp = num;
  while (temp > 0) {
    let result = findRoman(temp);
    romans = romans.concat(result);
    temp =
      temp -
      (result.length === 1
        ? roman[result]
        : roman[result[1]] - roman[result[0]]);
  }
  return romans;
};

console.log(convertToRoman(2)); // II
console.log(convertToRoman(4)); // IV
console.log(convertToRoman(36)); // XXXVI
console.log(convertToRoman(44)); // XLIV
console.log(convertToRoman(3999)); // MMMCMXCIX
console.log(convertToRoman(4999)); // MMMMCMXCIX
console.log(convertToRoman(5000));

// https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter/
const convertToRoman2 = function(num) {
  const decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanNumeral = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I"
  ];
  let romanized = "";
  for (var index = 0; index < decimalValue.length; index++) {
    while (decimalValue[index] <= num) {
      romanized += romanNumeral[index];
      num -= decimalValue[index];
    }
  }

  return romanized;
};

// test here
console.log(convertToRoman2(4999));
