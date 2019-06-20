/*
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-odd-fibonacci-numbers

Intermediate Algorithm Scripting: Sum All Odd Fibonacci Numbers

Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than 
or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the 
sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence 
are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal 
to 10 are 1, 1, 3, and 5.

    function sumFibs(num) {
        return num;
    }

    sumFibs(4);

*/

//F(n) = F(n-1) + F(n-2)
const sumFibs = num => {
  let total = 0;
  const FibonacciNumber = n =>
    n <= 0 ? 0 : n < 2 ? 1 : FibonacciNumber(n - 1) + FibonacciNumber(n - 2);

  let i = 0;
  let Fn = 0;
  while (Fn <= num) {
    if (Fn % 2 === 1) total += Fn;
    Fn = FibonacciNumber(i++);
  }

  return total;
};

console.log(sumFibs(10));
// should return 10.

console.log(sumFibs(4));
// should return 5.

console.log(sumFibs(4000000));
// should return 4613732

console.log(sumFibs(1000));
// 1785

console.log(sumFibs(75025));
// should return 135721
