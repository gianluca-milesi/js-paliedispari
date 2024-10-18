//creo una variabile parola per il prompt
//creo la funzione che confronta la parola originale con la sua inversa
//creo un if che stampa la risposta se è palindroma o no

let userWord = prompt("Inserisci una parola");

function isPalindrome(word) {
    let reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
}

if (isPalindrome(userWord) === true) {
    console.log("La parola è palindroma");
} else {
    console.log("La parola non è palindroma");
}