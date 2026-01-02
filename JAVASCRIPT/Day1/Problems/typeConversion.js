// TYPE CONVERSION IN JAVASCRIPT
// Explicit conversion using built-in methods

// 1️ String → Number
let strNum = "10";
console.log(Number(strNum));
// Output: 10

// 2️ Invalid String → Number
console.log(Number("10abc"));
// Output: NaN

// 3️ Number → String
let num = 20;
console.log(String(num));
// Output: "20"

// 4️ Boolean → Number
console.log(Number(true));
// Output: 1

console.log(Number(false));
// Output: 0

// 5️ Number → Boolean
console.log(Boolean(1));
// Output: true

console.log(Boolean(0));
// Output: false

// 6️ String → Boolean
console.log(Boolean(""));
// Output: false

console.log(Boolean("JavaScript"));
// Output: true

// 7️ null → Number
console.log(Number(null));
// Output: 0

// 8️ undefined → Number
console.log(Number(undefined));
// Output: NaN

// 9️ parseInt example
console.log(parseInt("100px"));
// Output: 100

// 10 parseFloat example
console.log(parseFloat("10.5kg"));
// Output: 10.5
