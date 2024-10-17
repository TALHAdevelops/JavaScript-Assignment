let courses = [];

for (let i = 1; i <= 5; i++) {
    const course = prompt(`Enter course ${i}:`);
    courses.push(course);   
    
}
if (courses !== undefined) {
    alert(courses);
} else {
    alert("Please enter a course");
}

for (let i = 0; i < courses.length; i++) {
    let editCourse = prompt("Edit course " + (i + 1)+" or not", courses[i]);
    if (editCourse !== null && editCourse !== courses[i]) {
        courses.splice(i, 1, editCourse);
    }
}
alert(`Updated courses: ${courses}`)
