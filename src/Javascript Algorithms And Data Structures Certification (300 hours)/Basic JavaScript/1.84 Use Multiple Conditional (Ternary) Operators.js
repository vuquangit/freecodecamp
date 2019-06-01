/* https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/use-multiple-conditional-ternary-operators

In the previous challenge, you used a single conditional operator. 
You can also chain them together to check for multiple conditions.

The following function uses if, else if, and else statements to check multiple conditions:
    function findGreaterOrEqual(a, b) {
        if(a === b) {
            return "a and b are equal";
        }
        else if(a > b) {
            return "a is greater";
        }
        else {
            return "b is greater";
        }
    }

The above function can be re-written using multiple conditional operators:
    function findGreaterOrEqual(a, b) {
        return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
    }

Use multiple conditional operators in the checkSign function to check if a number is positive, 
negative or zero.
    function checkSign(num) {
    
    }

    checkSign(10);
*/

function checkSign(num) {
  return num > 0 ? "positive" : num === 0 ? "zero" : "negative";
}

checkSign(10);
