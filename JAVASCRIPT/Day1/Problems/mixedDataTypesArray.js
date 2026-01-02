// Array of mixed data types
let mixedArray = [
  "book",            // string
  25,                // number
  true,              // boolean
  null,              // null
  undefined,         // undefined
  3.14,              // number
  { brand: "HP" },   // object
  [1, 2, 3]          // array
];

console.log(mixedArray);

// Accessing elements
console.log(mixedArray[0]); // book
console.log(mixedArray[2]); // true
console.log(mixedArray[5]); // 3.14
console.log(mixedArray[7][0]); // 1
// Modifying elements
mixedArray[1] = 30;
mixedArray[3] = "now not null";
console.log("Modified Array:", mixedArray);
// Accessing modified elements
console.log(mixedArray[1]); // 30
console.log(mixedArray[3]); // now not null

// Checking length
console.log("Length:", mixedArray.length);

