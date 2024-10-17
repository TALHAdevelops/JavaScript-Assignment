let num1 = Number(prompt("Enter first number:"))
let num2 = Number(prompt("Enter Second number:"))
let sign = prompt("Select the method(+,-,*,/):")
let result;

if (sign == "+") {
    result = num1+num2
} else if(sign == "-") {
    result = num1-num2
} else if(sign == "*"){
    result = num1*num2
} else if(sign == "/"){
    result = num1/num2
} else{
    alert("Invalid Operation")
}

if (result !== undefined) {
    alert (`Num1 = ${num1}
    Num2 = ${num2}
    Sign = ${sign}
    Result = ${result}`)
} else {
    alert("Please select the valid options")
}