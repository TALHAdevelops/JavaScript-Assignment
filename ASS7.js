
let decimalValue = prompt("Enter a number with a decimal point, e.g., 3.4")


let roundedNumber = Math.ceil(decimalValue);


let text = "This is my dummy text";


let slicedText = text.slice(0, roundedNumber);


let reversedText = "";
for (let i = slicedText.length - 1; i >= 0; i--) {
    reversedText += slicedText[i];
}

alert("Sliced Text:"+slicedText+"  Reversed sliced text: " + reversedText);
