/*
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-primes

Intermediate Algorithm Scripting: Sum All Primes

Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is 
a prime number because it's only divisible by one and two.

The provided number may not be a prime.

    function sumPrimes(num) {
        return num;
    }

    sumPrimes(10);
*/

const sumPrimes = num => {
  const prime = n => {
    if (n <= 1) return false;
    let i = 2;
    let checkPrime = true;
    while (i < n) {
      if (Number.isInteger(n / i)) {
        checkPrime = false;
        break;
      }
      i++;
    }
    return checkPrime;
  };

  let i = 0;
  let total = 0;
  while (i <= num) {
    if (prime(i)) total += i;
    i++;
  }

  return total;
};

console.log(sumPrimes(10)); // 17
console.log(sumPrimes(977)); // 73156
