/*
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/object-oriented-programming/understand-own-properties

Object Oriented Programming: Understand Own Properties

In the following example, the Bird constructor defines two properties: name and numLegs:

    function Bird(name) {
        this.name = name;
        this.numLegs = 2;
    }

    let duck = new Bird("Donald");
    let canary = new Bird("Tweety");

name and numLegs are called own properties, because they are defined directly on the 
instance object. That means that duck and canary each has its own separate copy of these properties.

In fact every instance of Bird will have its own copy of these properties.

The following code adds all of the own properties of duck to the array ownProps:

    let ownProps = [];

    for (let property in duck) {
        if(duck.hasOwnProperty(property)) {
            ownProps.push(property);
        }
    }

    console.log(ownProps); // prints [ "name", "numLegs" ]

---------------------------------------------------------------------------
Add the own properties of canary to the array ownProps.

    function Bird(name) {
        this.name = name;
        this.numLegs = 2;
    }

    let canary = new Bird("Tweety");
    let ownProps = [];
    // Add your code below this line

*/

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Add your code below this line
for (let pro in canary) if (canary.hasOwnProperty(pro)) ownProps.push(pro);
console.log(ownProps);