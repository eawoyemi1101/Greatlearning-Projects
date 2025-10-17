 // Creates a course object
let course = {
    courseName: "Computer Science",
    durationInMonths: 24,
    level: "Beginner"
};

// Displays object information
console.log("Original Course Information:");
console.log("Course Name:", course.courseName);
console.log("Duration (months):", course.durationInMonths);
console.log("Level:", course.level);

// Changing the value of level to "Intermediate"
course.level = "Intermediate";

// Displaying updated object information
console.log("\nUpdated Course Information:");
console.log("Course Name:", course.courseName);
console.log("Duration (months):", course.durationInMonths);
console.log("Level:", course.level);
