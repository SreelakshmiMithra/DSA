let arr = [11,12,13,14,15,16,17,18,19,20];

function searchElement(x) {
  for (let i = 0; i < arr.length; i++) {
    if (x === arr[i]) {
      return i; // stop and send index back
    }
  }
  return -1; // only comes here if element NOT found
}

let x = 13;
let result = searchElement(x);

if (result === -1) {
  console.log("Element not found:", result);
} else {
  console.log("Element found, index is:", result);
}
