function findOldestPerson(people) {
    if (people.length === 0) {
      return null; // Return null if the array is empty
    }
  
    return people.reduce((oldestPerson, currentPerson) => {
      if (!oldestPerson || currentPerson.age > oldestPerson.age) {
        return currentPerson;
      } else {
        return oldestPerson;
      }
    }, null);
  }
  
  // Example usage:
  const people = [
    { name: "John", age: 30 },
    { name: "Alice", age: 26 },
    { name: "Bob", age: 35 }
  ];
  
  const oldestPerson = findOldestPerson(people);
  console.log(oldestPerson); // Output: { name: "Bob", age: 35 }
  