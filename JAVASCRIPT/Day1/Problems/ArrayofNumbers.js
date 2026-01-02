let arr=[1,2,3,4,5,6,7,8,9,10];
console.log(arr);
console.log("Length of the array is: "+arr.length);
// Accessing elements
console.log("First Element: "+arr[0]); // First element
console.log("Last Element: "+arr[arr.length-1]); // Last element
// Modifying elements
arr[0] = 11;
arr[4] = 55;
console.log("Modified Array: "+arr);
//Accessing elements 
console.log("Second Element: "+arr[1]);
console.log("Fifth Element: "+arr[4]);
console.log("Eighth Element: "+arr[7]);
console.log("Eleventh Element (undefined): "+arr[10]); // Out of bounds access


//operations on Arrays
//Addition
console.log(arr[3] + arr[5]);//4+6
//subtraction 
console.log(arr[6] - arr[3]);//7-4
//multiplication
console.log(arr[2] * arr[8]);//3*9
//division
console.log(arr[5] / arr[2]);//6/3