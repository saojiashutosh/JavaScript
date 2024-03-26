let item = ["apple", "mango", "orange"];

// to insert 
item.push("pineapple")
console.log(item);

// to delete 

item.pop();
console.log(item)

// convert array to string

console.log(item.toString());

// concat : to join multiple arrays and return
let arr1 = [2, 4, 6];
let arr2 = [1, 3, 5];
let arr3 = arr1.concat(arr2)
console.log(arr3);

console.log(item);
// shift : delete element at the start of an array 
item.shift();

console.log(item);

// unshift : insert element at the start of an array
item.unshift("banana");
console.log(item);

// slice : return a piece of the array 
// not it does not make changes to orginal array
item.push("pinneapple", "apple", "grape", "watermelon");
console.log(item);
console.log(item.slice(3, 7));

// Splice() : change original array(add,remove,replace)

console.log(item);
console.log(item.splice(2, 2, "demo1"));
console.log(item);