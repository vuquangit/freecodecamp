/*
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/regular-expressions/match-characters-that-occur-zero-or-more-times

Regular Expressions: Match Characters that Occur Zero or More Times

The last challenge used the plus + sign to look for characters that occur one or more times. 
There's also an option that matches characters that occur zero or more times.

The character to do this is the asterisk or star: *.

    let soccerWord = "gooooooooal!";
    let gPhrase = "gut feeling";
    let oPhrase = "over the moon";
    let goRegex = /go*/ /*
    soccerWord.match(goRegex); // Returns ["goooooooo"]
    gPhrase.match(goRegex); // Returns ["g"]
    oPhrase.match(goRegex); // Returns null

Create a regex chewieRegex that uses the * character to match all the upper and lower"a" 
characters in chewieQuote. Your regex does not need flags, and it should not match any of 
the other quotes.

    let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
    let chewieRegex = /change/; // Change this line
    let result = chewieQuote.match(chewieRegex);
*/

let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /a*/i; // /Aa*/
let result = chewieQuote.match(chewieRegex);

console.log(result);
