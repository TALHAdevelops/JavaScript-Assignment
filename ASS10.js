

let UserVal = Number(prompt("Enter a number to Factorialize:"))

function factorialize(num) {
    if (num === 0 || num === 1){
        return 1;
    }
      else{
        for (var i = num - 1; i >= 1; i--) {
            num *= i;
          }
          return num;
      }
  
  }
;
  console.log(  factorialize(UserVal));
  