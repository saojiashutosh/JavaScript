// Create an array to store companies-> "Bloomberg","Microsoft","Uber","Google","IBM","Netflix"
// a.Remove the first company from the array.
// b.Remove Uber & Add Ola in its place
// c.Add Amazon at the end

let componies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(componies);
// a
componies.shift();
console.log(componies);

// b
componies.splice(1, 1, "Ola");
console.log(componies);
// c
componies.push("Amazon");

console.log(componies);