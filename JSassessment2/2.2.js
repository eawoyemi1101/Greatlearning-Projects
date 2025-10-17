(function() {
    // Function to calculate factorials
    function factorial(num) {
      if (num === 0 || num === 1) {
        return 1;
      } else {
        return num * factorial(num - 1);
      }
    }
  
    // Calculate factorial of a given number
    const number = 5;
    const result = factorial(number);
  
    // Log the result to the console
    console.log(`Factorial of ${number} is: ${result}`);
  })();
  