var multiplyBy = (function() {
    // This inner function is immediately invoked and returns the actual function that will be assigned to multiplyBy
    return function(number, factor) {
        return number * factor;
    };
})();

// Example usage:
console.log(multiplyBy(5, 3)); // Output: 15
console.log(multiplyBy(11, 2)); // Output: 22
