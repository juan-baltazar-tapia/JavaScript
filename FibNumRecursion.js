//The Fibonacci series is a sequence of numbers in which each number is the sum of the previous two numbers. The first two Fibonacci numbers are 1 and 1. The third number is 1 + 1 = 2, the fourth is 1 + 2 = 3, the fifth is 2 + 3 = 5, and so on. In mathematical terms, this can be represented as:
function fibonacci(n){
//     F(1) = 1
// F(2) = 1
// F(n) = F(n - 1) + F(n - 2) where n > 2
    if (n === 1)return 1;
    if (n == 2) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);

}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765