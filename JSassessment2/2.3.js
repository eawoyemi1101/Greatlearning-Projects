function calculate(a, b, operation) {
    return operation(a, b);
  }
  
  // Define operation functions
  function addition(x, y) {
    return x + y;
  }
  
  function subtraction(x, y) {
    return x - y;
  }
  
  function multiplication(x, y) {
    return x * y;
  }
  
  function division(x, y) {
    if (y === 0) {
      throw new Error("Division by zero is not allowed");
    }
    return x / y;
  }
  

  console.log(calculate(6, 3, addition)); 
  console.log(calculate(5, 3, subtraction)); 
  console.log(calculate(5, 3, multiplication)); 
  console.log(calculate(6, 2, division)); 
  