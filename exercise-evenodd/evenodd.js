let userChoice = prompt("Scegli pari o dispari");
console.log(`Hai scelto: ${userChoice}`);
let userNum = parseInt(prompt("Scegli un numero da 1 a 5"));
console.log(`Hai tirato: ${userNum}`);

function computerRandomNumber() {
    let randomNum = Math.floor(Math.random() * 5) + 1;
    return randomNum;
}

function isEven(num) {
    return num % 2 === 0;
}

let computerNum = computerRandomNumber();
console.log(`Il Computer ha tirato: ${computerNum}`);
let sum = computerNum + userNum;
console.log(sum);

if (userChoice === "pari" && isEven(sum) || userChoice === "dispari" && !isEven(sum)) {
    console.log("Hai vinto");
} else {
    console.log("Ha vinto il Computer");
}



