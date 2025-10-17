function displayByKey(students, keyName) {
    students.forEach(function(student) {
        console.log(student[keyName]);
    });
}

// Example usage:
var students = [
    { name: "Alice", age: 20 },
    { name: "Steve", age: 22 },
    { name: "Charlie", age: 21 }
];

// Displaying the value of the key "name" for each student
displayByKey(students, "name");
