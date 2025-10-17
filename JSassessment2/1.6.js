// Define the doubleNumber function
function doubleNumber(num) {
    return num * 2;
}

// Define a function that takes an array of numbers and a callback function
function doubleArrayNumbers(numbers, callback) {
    // Iterate through each number in the array and double it using the callback function
    let doubledArray = numbers.map(callback);
    
    // Display the updated array
    console.log("Updated Array:", doubledArray);
}

// Example usage
let numbersArray = [1, 2, 3, 4, 5];
console.log("Original Array:", numbersArray);
doubleArrayNumbers(numbersArray, doubleNumber); // Passing doubleNumber function as a callback
