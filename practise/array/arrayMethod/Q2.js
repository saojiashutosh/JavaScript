// Create an array of numbers from 1 to 10 .
// Use th reduce method to calculate sum of all numbers in the array .
// Use the reduce method to calculate product of all numbers in the array.

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = num.reduce((res, cur) => {
    return res + cur;
})

let prod = num.reduce((res, cur) => {
    return res * cur;
})

console.log(`Sum of all numbers in the array is ${sum}`);
console.log(`Product of all numbers in the array is ${prod}`)