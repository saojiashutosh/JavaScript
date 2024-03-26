// for a given array with the prices of 5 item -> [250,545,300,900,50] 
// All items have an offer of 10%OFF on them .
// Change the array to store final price after applying offer.

let itemPrice = [250, 645, 300, 900, 50];
console.log("Item prices before discount : \t", itemPrice);

for (let i = 0; i < itemPrice.length; i++) {
    itemPrice[i] = itemPrice[i] - itemPrice[i] * 0.1;
}

console.log("Item prices after 10% discount : \t", itemPrice);