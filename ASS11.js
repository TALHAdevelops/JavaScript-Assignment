let ObtainedMarks = Number(prompt("Enter your Marks:"));
let TotalMarks = 500;

let percentage =  ObtainedMarks * 100/ TotalMarks;
let grade;
switch (percentage) {
    case (percentage >= 90):
        grade = "A+";
        break;
    case (percentage >= 75):
        grade = "A";
        break;
    case (percentage >= 60):
        grade = "B";
        break;
    case (percentage >= 45):
        grade = "C";
        break;
    case (percentage >= 30):
        grade = "D";
        break;
    default:
        grade = "F";
}
alert(`Total Marks: ${TotalMarks}  Marks Obtained: ${ObtainedMarks}   Percentage: ${percentage}  Grade: ${grade}`)