//  Array of strings
let arr= ["book","pen","laptop","notebook","keyboard"];
console.log(arr);
console.log("Length of the array is: "+arr.length);
// Accessing elements
console.log("First Element: "+arr[0]);
console.log("Last Element: "+arr[arr.length-1]);   
// Modifying elements
arr[1] = "pencil";
arr[3] = "tablet";
console.log("Modified Array: "+arr);
//Accessing elements
console.log("Second Element: "+arr[1]);
console.log("Fourth Element: "+arr[3]);
console.log("Fifth Element: "+arr[4]);
console.log("Sixth Element (undefined): "+arr[5]); // Out of bounds access
//operations on Arrays of strings
//Concatenation
console.log(arr[0] + " & " + arr[2]);//book & laptop
console.log(arr[1] + " and " + arr[4]);//pencil and keyboard