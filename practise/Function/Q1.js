//Create a function using athe "function" keyword that takes a string as an argument & return the number of vowels in the string

function vowels(str) {
    let count = 0;
    for (let i of str) {
        if (i == "a" || i == "e" || i == "i" || i == "o" || i == "u") {
            count++;
        }
    }

    return count;
}

let str = "ashutosh"

let count = vowels(str);

console.log(`numbers of vowel in the string is ${count}`);