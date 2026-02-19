
// Variables & Data Types

let studentName = "Aman Giri";
const age = 21;
let isLearning = true;
let marks = 85.5;

console.log("Name:", studentName);
console.log("Age:", age);
console.log("Is Learning JS:", isLearning);
console.log("Marks:", marks);



//  Even / Odd Checker

function checkEvenOdd(number) {
    if (number % 2 === 0) {
        console.log(number + " is Even");
    } else {
        console.log(number + " is Odd");
    }
}

checkEvenOdd(10);
checkEvenOdd(7);



// Simple Calculator


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}

console.log("Addition:", add(10, 5));
console.log("Subtraction:", subtract(10, 5));
console.log("Multiplication:", multiply(10, 5));
console.log("Division:", divide(10, 5));


// Temperature Converter

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

console.log("25°C to Fahrenheit:", celsiusToFahrenheit(25));
console.log("77°F to Celsius:", fahrenheitToCelsius(77));



// User Input (prompt & alert)


let userNumber = prompt("Enter a number to check Even or Odd:");

userNumber = Number(userNumber);

if (!isNaN(userNumber)) {
    if (userNumber % 2 === 0) {
        alert(userNumber + " is Even");
    } else {
        alert(userNumber + " is Odd");
    }
} else {
    alert("Invalid input. Please enter a valid number.");
}
