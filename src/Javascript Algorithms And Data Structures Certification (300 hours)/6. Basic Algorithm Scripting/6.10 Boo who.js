/*
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/boo-who

Basic Algorithm Scripting: Boo who

Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.

    function booWho(bool) {
        // What is the new fad diet for ghost developers? The Boolean.
        return bool;
    }

    booWho(null);
*/

const booWho = bool => typeof bool === "boolean";

console.log(booWho(null));
console.log(booWho(true));
console.log(booWho(false));
console.log(booWho([1, 2, 3]));
console.log(booWho("true"));
console.log(booWho("false"));
