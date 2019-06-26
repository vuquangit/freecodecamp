/* https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/es6/use-destructuring-assignment-to-assign-variables-from-nested-objects

We can similarly destructure nested objects into variables.

Consider the following code:
    const a = {
    start: { x: 5, y: 6},
    end: { x: 6, y: -9 }
    };
    const { start : { x: startX, y: startY }} = a;
    console.log(startX, startY); // 5, 6

In the example above, the variable start is assigned the value of a.start, which 
is also an object.

--------------------------------------------------------------------------------
Use destructuring assignment to obtain max of forecast.tomorrow and assign it to 
maxOfTomorrow:

    const LOCAL_FORECAST = {
        today: { min: 72, max: 83 },
        tomorrow: { min: 73.3, max: 84.6 }
    };

    function getMaxOfTmrw(forecast) {
        "use strict";
        // change code below this line
        const maxOfTomorrow = undefined; // change this line
        // change code above this line
        return maxOfTomorrow;
    }

    console.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6
*/

const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
  "use strict";
  // change code below this line
  const {
    tomorrow: { max: maxOfTomorrow }
  } = forecast;
  // change code above this line
  return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6
