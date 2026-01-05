function countNegativeNumbers(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }

  return count;
}

let arr = [-1,3,-11,4,56,-34,12,34,-98,-34,-76];
let res =countNegativeNumbers(arr);
console.log(res);