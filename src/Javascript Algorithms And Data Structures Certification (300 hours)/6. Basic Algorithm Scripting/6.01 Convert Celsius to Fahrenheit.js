/*
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/convert-celsius-to-fahrenheit

Basic Algorithm Scripting: Convert Celsius to Fahrenheit

The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

You are given a variable celsius representing a temperature in Celsius. 
Use the variable fahrenheit already defined and assign it the Fahrenheit temperature 
equivalent to the given Celsius temperature. Use the algorithm mentioned above to help 
convert the Celsius temperature to Fahrenheit.

Don't worry too much about the function and return statements as they will be covered 
in future challenges. For now, only use operators that you have already learned.

    function convertToF(celsius) {
        let fahrenheit;
        return fahrenheit;
    }

    convertToF(30);
*/

const convertToF = celsius =>
  typeof celsius === "number"
    ? (9 / 5) * celsius + 32
    : "fahrenheit not defined";

console.log(convertToF(30));
console.log(convertToF(0));
