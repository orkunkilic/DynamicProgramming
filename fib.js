//memoization
const fib_m = (n, memo = {}) => {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    memo[n] =  fib_m(n - 1, memo) + fib_m(n - 2, memo);
    return memo[n]
}

// traditional way
const fib = (n) => {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
}

/* console.log(fib(6)); //8
console.log(fib(7)); //13
console.log(fib(8)); //21
console.log(fib(50)) //12586269025 */

console.log(fib_m(6)); //8
console.log(fib_m(7)); //13
console.log(fib_m(8)); //21
console.log(fib_m(50)) //12586269025 