

// Function to greet a user
function greet(name) {
    console.log(`Hello ${name}, welcome to the JavaScript world!`);
}

// Function to handle multiple users dynamically
function greetUsers(userCount) {

    // Loop runs based on number of users
    for (let i = 1; i <= userCount; i++) {
        let name = "User" + i;
        greet(name);
    }
}

// Example: 15 users coming at a time 
let numberOfUsers = 10;

// Call the function with dynamic value
greetUsers(numberOfUsers);
