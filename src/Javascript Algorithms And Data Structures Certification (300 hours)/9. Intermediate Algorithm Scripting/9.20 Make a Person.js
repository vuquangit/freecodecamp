/*
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/make-a-person

Intermediate Algorithm Scripting: Make a Person

Fill in the object constructor with the following methods below:

getFirstName() getLastName() getFullName() setFirstName(first) setLastName(last) setFullName(firstAndLast)
Run the tests to see the expected output for each method.

The methods that take an argument must accept only one argument and it has to be a string.

These methods must be the only available means of interacting with the object.

    var Person = function(firstAndLast) {
        // Complete the method below and implement the others similarly
        this.getFullName = function() {
            return "";
        };
        return firstAndLast;
    };

    var bob = new Person('Bob Ross');
    bob.getFullName();
*/

let Person = function(firstAndLast) {
  this.getFirstName = () => firstAndLast.split(" ")[0];
  this.getLastName = () => firstAndLast.split(" ")[1];
  this.getFullName = () => firstAndLast;
  this.setFirstName = first =>
    (firstAndLast = [first, firstAndLast.split(" ")[1]].join(" "));
  this.setLastName = last =>
    (firstAndLast = [firstAndLast.split(" ")[0], last].join(" "));
  this.setFullName = firstAndLast => (this.firstAndLast = firstAndLast);
};

var bob = new Person("Bob Ross");
console.log(Object.keys(bob).length);
console.log(bob.getFullName());

//bob.setFirstName("Haskell");
console.log(bob.getFullName());

//bob.setLastName("Curry");
console.log(bob.getFullName());

bob.setFullName("Haskell Curry");
console.log(bob.getLastName());
