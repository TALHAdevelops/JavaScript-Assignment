let name = prompt("Enter your name:");
let dobDay = prompt("Enter your date of birth (day):");
let dobMonth = prompt("Enter your date of birth (month):");
let dobYear = prompt("Enter your date of birth (year):");

console.log(`Hello ${name}, Good Morning, Afternoon, Evening or Night`);

let today = new Date();
let dob = new Date(dobYear, dobMonth - 1, dobDay); // Months are 0-indexed
let age = today.getFullYear() - dob.getFullYear();
let months = today.getMonth() - dob.getMonth();
let days = today.getDate() - dob.getDate();

if (months < 0 || (months === 0 && days < 0)) {
  age--;
  months += 12;
}


let nextBirthday = new Date(today.getFullYear() + 1, dobMonth - 1, dobDay);
let timeUntilBirthday = nextBirthday.getTime() - today.getTime();


let daysLeft = Math.floor(timeUntilBirthday / (1000 * 60 * 60 * 24));
let hoursLeft = Math.floor((timeUntilBirthday % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutesLeft = Math.floor((timeUntilBirthday % (1000 * 60 * 60)) / (1000 * 60));
let secondsLeft = Math.floor((timeUntilBirthday % (1000 * 60)) / 1000);


console.log(`Your DOB is : ${dob}`);

console.log(`You are ${age} years ${months} Month ${days} Days ${hoursLeft} Hours ${minutesLeft} Minutes ${secondsLeft} Seconds old`);

let ageInDays = Math.floor((today.getTime() - dob.getTime()) / (1000 * 60 * 60 * 24));
console.log(`Your Age in Days ${ageInDays}`);

if (daysLeft === 0 && hoursLeft === 0 && minutesLeft === 0 && secondsLeft === 0) {
  console.log(`Happy Birthday ${name}. Today is Your ${age}th Birthday`);
} else {
  console.log(`How much time left in your next birthday? ${daysLeft} days ${hoursLeft} hours ${minutesLeft} minutes ${secondsLeft} seconds`);
}