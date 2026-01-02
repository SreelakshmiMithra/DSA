// TYPE COERCION IN JAVASCRIPT
// JavaScript automatically converts data types when required

// 1️ String + Number → String concatenation
let a = "10";
let b = 5;
console.log(a + b); 
// Output: "105"
// Reason: Number is coerced into a string

// 2️ Number + String → String concatenation
console.log(10 + "5");
// Output: "105"

// 3️ Number + empty string → String
console.log(10 + "");
// Output: "10"

// 4️ Number + empty string + Number → String concatenation
console.log(10 + "" + 5);
// Output: "105"

// 5️ Number + Number → Arithmetic addition
console.log(10 + 5);
// Output: 15

// 6️ String + Number + Number (left to right)
console.log("10" + 5 + 5);
// Output: "1055"
// Reason: Once string concatenation starts, it continues

// 7️ Number + Number + String
console.log(10 + 5 + "5");
// Output: "155"

// 8️ String - Number → Number subtraction
console.log("10" - 5);
// Output: 5
// Reason: '-' operator forces numeric conversion

// 9️ String * Number → Number multiplication
console.log("10" * 2);
// Output: 20

// 10 String / Number → Number division
console.log("20" / 2);
// Output: 10

// 11 Boolean + Number
console.log(true + 1);
// Output: 2 (true → 1)

console.log(false + 1);
// Output: 1 (false → 0)

// 12 null with numbers
console.log(null + 5);
// Output: 5 (null → 0)

// 13 undefined with numbers
console.log(undefined + 5);
// Output: NaN

//Three important rules to remember for type coercion in JavaScript:
// 1️ If either operand is a string and the operator is +, perform string concatenation.
// 2️ For all other arithmetic operators (-, *, /), convert operands to numbers.
// 3️ Boolean true converts to 1, false converts to 0 in numeric contexts.

//Three important coercions
//case1:string+number=string
let first_Name = "Sree";
let num = 3;
let typo = first_Name +" "+ num;
console.log(typo);
//case2:Number+string+number=number concatenation
let num1 = 4;
let num2 = 5;
let num3 = num1 + " " + num2;
console.log(num3);
//case3:number+number=addition
let no1 = 4;
let no2 = 5;
let no3 = num1 + " " + num2;
console.log(no3);
//type conversion
let nums = 1;
let nums2 = String(2);
let nums3 = nums + nums2;
console.log(nums3)
