
//Conditional Statements

function checkNumber(num) {
    if (num > 0) {
        console.log("Number is Positive");
    } else if (num < 0) {
        console.log("Number is Negative");
    } else {
        console.log("Number is Zero");
    }
}

checkNumber(5);
checkNumber(-2);
checkNumber(0);

//  Grade Calculator

function calculateGrade(marks) {
    if (marks >= 90) {
        console.log("Grade: A");
    } else if (marks >= 75) {
        console.log("Grade: B");
    } else if (marks >= 60) {
        console.log("Grade: C");
    } else {
        console.log("Grade: Fail");
    }
}

calculateGrade(92);
calculateGrade(80);
calculateGrade(67);
calculateGrade(45);

// For Loop Practice

// Program 1: Print 1 to 20
function printNumbers() {
    for (let i = 1; i <= 20; i++) {
        console.log(i);
    }
}

printNumbers();

// Program 2: Multiplication Table
function printTable(number) {
    console.log("Table of " + number);
    for (let i = 1; i <= 10; i++) {
        console.log(number + " x " + i + " = " + (number * i));
    }
}

printTable(5);

// While Loop Practice

function countdown() {
    let i = 10;

    while (i >= 1) {
        console.log(i);
        i--;
    }
}

countdown();

//Number Guessing Game
function guessingGame() {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    let userGuess = Number(prompt("Guess a number between 1 and 10"));

    if (userGuess > randomNumber) {
        console.log("Too High");
    } else if (userGuess < randomNumber) {
        console.log("Too Low");
    } else {
        console.log("Correct!");
    }

    console.log("Random Number was: " + randomNumber);
}

guessingGame();