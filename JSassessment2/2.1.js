// checks if a number is even
function checkEven(number) {
    return number % 2 === 0;
  }
  
  // Function to filter out even numbers from an array
  function filterEvens(array, checkEvenFunction) {
    return array.filter(checkEvenFunction);
  }
  
  // Example usage:
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const evenNumbers = filterEvens(numbers, checkEven);
  console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]
  