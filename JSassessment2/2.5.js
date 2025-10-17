const arraySum = (function() {
    return function(arr) {
      if (!Array.isArray(arr)) {
        throw new Error("This Input is not an array");
      }
      return arr.reduce((sum, num) => sum + num, 0);
    };
  })();
  
  // Example usage:
  const arr = [1, 2, 3, 4, 5];
  console.log(arraySum(arr)); // Output: 15
  