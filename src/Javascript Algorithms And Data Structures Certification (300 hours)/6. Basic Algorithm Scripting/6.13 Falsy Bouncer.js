/*
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/falsy-bouncer

Basic Algorithm Scripting: Falsy Bouncer

Remove all falsy values from an array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
Hint: Try converting each value to a Boolean.

    function bouncer(arr) {
        // Don't show a false ID to this bouncer.
        return arr;
    }

    bouncer([7, "ate", "", false, 9]);

*/

const bouncer = arr => arr.filter(item => (item ? item : null));
//const bouncer = (arr) => arr.filter(Boolean);

console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));
