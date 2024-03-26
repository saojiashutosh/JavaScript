// Create an arrow function for Q1 

const vowels = (str) => {
    let count = 0;
    for (let i of str) {
        if (i == "a" || i == "e" || i == "i" || i == "o" || i == "u") {
            count++;
        }
    }

    return count;
}

let str = "asaaaaaadsadaadasdadad"

let count = vowels(str);

console.log(`numbers of vowel in the string is ${count}`);