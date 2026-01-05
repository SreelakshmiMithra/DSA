////: Global array approach

let arr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function searchElement(x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      return i;
    }
  }
  return -1;
}

let x = 13;
let result = searchElement(x);

if (result === -1) {
  console.log("Element not found:", result);
} else {
  console.log("Element found, index is:", result);
}


//  Parameter-based approach 

function searchElement1(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      return i;
    }
  }
  return -1;
}

let arr1 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let arr2 = [4, 2, 0, 10, 8, 30];

console.log(searchElement1(arr2, 10)); // 3
console.log(searchElement1(arr2, 45)); // -1