//Real Life Object Example: User Profile,API Object
const user = {
  name: "Lakshmi",
  email: "lakshmi@gmail.com",
  age: 21,
  role: "Student",
  isLoggedIn: true
};
console.log(user);

// Accessing object properties  
console.log("Name: " + user.name);
console.log("Email: " + user.email);
console.log("Age: " + user.age);
console.log("Role: " + user.role);
console.log("Is Logged In: " + user.isLoggedIn);

// Modifying object properties
user.age = 22;
user.role = "Developer";
console.log("Modified User Object: ", user);
// Accessing modified properties
console.log("Updated Age: " + user.age);
console.log("Updated Role: " + user.role);
// Adding new property
user.country = "India";
console.log("User Object after adding country: ", user);
console.log("Country: " + user.country);
// Deleting a property
delete user.isLoggedIn;
console.log("User Object after deleting isLoggedIn: ", user);
// Trying to access deleted property
console.log("Is Logged In (after deletion): " + user.isLoggedIn); // undefined  
// Checking the type of user
console.log("Type of user object: " + typeof user); // object
// Checking the number of properties in user object
console.log("Number of properties in user object: " + Object.keys(user).length);


const apiResponse = {
  status: "success",
  data: {
    id: 101,
    title: "JavaScript Basics",
    duration: "4 weeks"
  }
};

console.log("API Response: ", apiResponse);
// Accessing nested object properties
console.log("Course ID: " + apiResponse.data.id);
console.log("Course Title: " + apiResponse.data.title);
console.log("Course Duration: " + apiResponse.data.duration);
// Modifying nested object properties
apiResponse.data.duration = "6 weeks";
console.log("Modified API Response: ", apiResponse);
// Accessing modified nested property
console.log("Updated Course Duration: " + apiResponse.data.duration);
// Adding new nested property
apiResponse.data.instructor = "John Doe";
console.log("API Response after adding instructor: ", apiResponse);
console.log("Instructor: " + apiResponse.data.instructor);
// Deleting a nested property
delete apiResponse.data.id;
console.log("API Response after deleting id: ", apiResponse);