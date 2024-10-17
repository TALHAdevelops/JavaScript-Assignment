let USerValue = prompt("Enter some words: ");

function FirstLetterCapital() {
   let Capitalize =  USerValue.charAt(0).toUpperCase() + USerValue.slice(1,USerValue.length).toLowerCase();
   console.log(Capitalize);
   
}
FirstLetterCapital();