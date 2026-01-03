// Function to greet a user by accepting a name as a parameter
function greet(name) {
    console.log("Hello, " + name + "!");
}

// Calling the same function multiple times with different values
greet("Krishna");
greet("Radha"); // Same function reused with different arguments

// Another greeting function (separate example)
function greet1(name1) {
    console.log("Hai, " + name1 + "!");
}

// Storing names in variables for reuse and clarity
let user1 = "Arjuna";
let user2 = "Bhima";

// Passing variables as arguments to the function
greet1(user1);
greet1(user2);
greet1("Dronacharya"); // Directly passing a string literal
