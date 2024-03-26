let arr = [2, 3, 4, 5, 6, 7, 8, 9, 10];

let newArr = arr.filter((val) => {
    return val % 2 == 0;
})

console.log(newArr);