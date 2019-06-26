/*
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming/combine-an-array-into-a-string-using-the-join-method

Functional Programming: Combine an Array into a String Using the join Method

The join method is used to join the elements of an array together to create a string. It takes 
an argument for the delimiter that is used to separate the array elements in the string.

Here's an example:

    var arr = ["Hello", "World"];
    var str = arr.join(" ");
    // Sets str to "Hello World"

---------------------------------------------------------------------------------------------
Use the join method (among others) inside the sentensify function to make a sentence from the 
words in the string str. The function should return a string. For example, "I-like-Star-Wars" 
would be converted to "I like Star Wars". For this challenge, do not use the replace method.

    function sentensify(str) {
        // Add your code below this line
        return str.split("-").join(" ");
        
        // Add your code above this line
    }
    sentensify("May-the-force-be-with-you");
*/

const sentensify = str => str.split(/\W/).join(" ");
sentensify("May-the-force-be-with-you");
