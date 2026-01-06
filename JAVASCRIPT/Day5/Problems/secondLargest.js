function secondLargest(arr) {
    // Validate input
    if (!Array.isArray(arr)) {
        return "Invalid input: Not an array";
    }

    if (arr.length < 2) {
        return "Second largest element does not exist";
    }

    let firstLargest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        const value = arr[i];

        if (typeof value !== "number") continue;

        if (value > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = value;
        } 
        else if (value > secondLargest && value < firstLargest) {
            secondLargest = value;
        }
    }

    // If second largest was never updated
    if (secondLargest === -Infinity && firstLargest !== -Infinity) {
        return "Second largest element does not exist";
    }

    return secondLargest;
}
console.log(secondLargest([])); 


console.log(secondLargest([10])); 


console.log(secondLargest([10, 10])); 


console.log(secondLargest([10, 20])); 
// 10

console.log(secondLargest([20, 20, 20])); 


console.log(secondLargest([10, 20, 20, 30])); 
// 20

console.log(secondLargest([-Infinity, -100, -50])); 
// -100

console.log(secondLargest([Infinity, 100, 200])); 
// 200
