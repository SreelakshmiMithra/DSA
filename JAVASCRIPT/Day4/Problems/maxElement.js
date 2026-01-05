// Function to return the maximum element in an array
let arr = [31, 23, 42, 56, 43, 20, 41, 78];

function maxElement(arr) {
    // Assume first element is the maximum
    let max = arr[0];

    // Loop through the array to find the maximum value
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    // Return the maximum value
    return max;
}

let res1 = maxElement(arr);
console.log(res1);


// Function to return the minimum element in an array
let arr1 = [31, 23, 42, 56, 43, 20, 41, 78];

function minElement(arr1) {
    // Assume first element is the minimum
    let min = arr1[0];

    // Loop through the array to find the minimum value
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] < min) {
            min = arr1[i];
        }
    }

    // Return the minimum value
    return min;
}

let res = minElement(arr1);
console.log(res);
