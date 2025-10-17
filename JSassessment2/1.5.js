// Sample array of student objects
let students = [
    { firstName: "George", lastName: "Doe" },
    { firstName: "Jane", lastName: "Smith" },
    { firstName: "Alice", lastName: "Johnson" }
];

// Iterate through each student object
students.forEach(student => {
    // Extracting first name and last name
    let firstName = student.firstName;
    let lastName = student.lastName;
    
    // Displaying first name and last name of each student
    console.log("First Name:", firstName, "- Last Name:", lastName);
});
