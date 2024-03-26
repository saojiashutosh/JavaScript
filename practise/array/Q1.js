// for a given array with marks of student -> [85,97,44,37,76,60]
// Find the average marks of the entire class. 

let marks = [85, 97, 44, 37, 76, 60];
totalStud = marks.length;
let sum = 0;
for (let i = 0; i < totalStud; i++) {
    sum += marks[i];
}

let avgMarks = sum / totalStud;

console.log(`Average marks of students are ${avgMarks}`);