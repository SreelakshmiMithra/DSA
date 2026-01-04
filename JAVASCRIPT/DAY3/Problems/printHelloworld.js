

// Function to print "Hello World" multiple times
// Parameter x decides how many times it should be printed
function printHelloWorld(x) {

    // Loop runs from 0 to x-1
    for (let i = 0; i < x; i++) {
        console.log("Hello World");
    }
}

// Value that decides the number of times to print
let x = 20;

// Function call with argument x
printHelloWorld(x);

// Function to print "Hello World" and count how many times it is printed
function printHelloWorld1(x1) {

    // Counter variable to track count
    let count1 = 0;

    // Loop runs x times
    for (let i = 0; i < x1; i++) {
        console.log("Hello World");
        count1++; // increase count each time it prints
    }

    // Print total count
    console.log("Total times printed:", count1);
}

// Value provided
let x1 = 20;

// Function call
printHelloWorld1(x1);