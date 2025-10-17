function findMax(arr) {
    // Using Math.max with apply to find the maximum value in the array
    return Math.max.apply(null, arr);
}

// Example usage:
var numbers = [10, 5, 25, 8, 15];
console.log("Maximum number:", findMax(numbers)); // Output: 25
