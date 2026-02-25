// Array Basics
// Create an array of numbers
const numbers = [10, 25, 37, 42, 58, 63, 71, 84, 99];

// Print all elements
console.log("All elements:", numbers);

// Print array length
console.log("Array length:", numbers.length);

// Access and print first element
console.log("First element:", numbers[0]);

// Access and print last element (using length-1)
console.log("Last element:", numbers[numbers.length - 1]);


// Array Methods Practice

// Create a working array for methods demonstration
let fruits = ["apple", "banana", "orange"];
console.log("Initial array:", fruits);

// push() 
fruits.push("grape");
console.log("After push('grape'):", fruits);

// pop() 
let poppedFruit = fruits.pop();
console.log("After pop():", fruits);
console.log("Popped element:", poppedFruit);

// shift() 
let shiftedFruit = fruits.shift();
console.log("After shift():", fruits);
console.log("Shifted element:", shiftedFruit);

// unshift()
fruits.unshift("kiwi");
console.log("After unshift('kiwi'):", fruits);

// includes() 
console.log("Includes 'banana'?:", fruits.includes("banana"));
console.log("Includes 'mango'?:", fruits.includes("mango"));


// Student Object

// Create a student object
const student = {
    name: "SUMIT VARMA",
    age: 20,
    marks: 85
};

// Access and print name and marks
console.log("Student name:", student.name);
console.log("Student marks:", student.marks);


// Array of Objects

// Create array with at least 3 student objects
const students = [
    { name: "AMAN GIRI", marks: 80 },
    { name: "AYUSH GOSAWMI", marks: 75 },
    { name: "VISHAL GUPTA", marks: 90 },
    { name: "ANIL WAGHAMARE", marks: 88 } // Extra student for better average calculation
];

console.log("Students array:", students);


// Calculate Average Mark

// Calculate total marks
let totalMarks = 0;
for (let i = 0; i < students.length; i++) {
    totalMarks += students[i].marks;
}

// Calculate average
let averageMarks = totalMarks / students.length;

// Print results
console.log("Total marks:", totalMarks);
console.log("Number of students:", students.length);
console.log("Average marks:", averageMarks.toFixed(2)); // toFixed(2) for 2 decimal places


//  Advanced - Iterate through students

console.log("Using for loop:");
// Using for loop
for (let i = 0; i < students.length; i++) {
    console.log(`${students[i].name} – ${students[i].marks}`);
}

console.log("\nUsing forEach method:");
// Using forEach method (alternative approach)
students.forEach(function(student) {
    console.log(`${student.name} – ${student.marks}`);
});

console.log("\nUsing forEach with arrow function:");
students.forEach(student => console.log(`${student.name} – ${student.marks}`));
