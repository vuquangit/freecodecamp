/*
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register

JavaScript Algorithms and Data Structures Projects: Cash Register

Design a cash register drawer function checkCashRegister() that accepts purchase price as the 
first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the 
third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, 
or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if 
it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted 
in highest to lowest order, as the value of the change key.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (DOLLAR)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)

    function checkCashRegister(price, cash, cid) {
        var change;
        // Here is your change, ma'am.
        return change;
    }

    // Example cash-in-drawer array:
    // [["PENNY", 1.01],
    // ["NICKEL", 2.05],
    // ["DIME", 3.1],
    // ["QUARTER", 4.25],
    // ["ONE", 90],
    // ["FIVE", 55],
    // ["TEN", 20],
    // ["TWENTY", 60],
    // ["ONE HUNDRED", 100]]

    checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

*/

// https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register/

const currency = {
  Penny: 0.01,
  Nickel: 0.05,
  Dime: 0.1,
  Quarter: 0.25,
  Dollar: 1,
  "Five Dollars": 5,
  "Ten Dollars": 10,
  "Twenty Dollars": 20,
  "One-hundred Dollars": 100
};
const checkCashRegister = (price, cash, cid) => {
  let diff = cash - price;
  let total = cid.reduce((acc, value) => acc + value[1], 0);
  if (total < diff) return { status: "INSUFFICIENT_FUNDS", change: [] };
  else if (total === diff) return { status: "CLOSED", change: cid };
  else {
    let list = Object.keys(currency)
      .map(item => {
        return { "Currency Unit": item, Amount: currency[item] };
      })
      .sort((a, b) => b.Amount - a.Amount);
    console.log(list);

    return { status: "OPEN", change: "..." };
  }
};

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
  ])
);
// should return {status: "OPEN", change: [["QUARTER", 0.5]]}
