// Function to add two numbers
function addNumbers(num1, num2) {
    let sum = num1 + num2;
    console.log("Addition:", sum);
}

// Function to subtract two numbers
function subtractNumbers(num1, num2) {
    let difference = num1 - num2;
    console.log("Subtraction:", difference);
}

// Function to multiply two numbers
function multiplyNumbers(num1, num2) {
    let product = num1 * num2;
    console.log("Multiplication:", product);
}

// Function to divide two numbers (with zero check)
function divideNumbers(num1, num2) {
    let quotient = num1 / num2;
    console.log("Division:", quotient);
}


// Variables for testing
let a = 20;
let b = 5;

// Function calls using variables
addNumbers(a, b);
subtractNumbers(a, b);
multiplyNumbers(a, b);
divideNumbers(a, b);

// Function calls using direct values
addNumbers(7, 9);
subtractNumbers(15, 10);
multiplyNumbers(6, 4);
divideNumbers(10, 0);
divideNumbers(10, 2);