/*Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.*/

//calcolare e stampare il numero dell'utente
const userNumber = Math.floor(Math.random() * (6)) + 1;
console.log(userNumber, "Numero dell'utente")
document.getElementById("NumeroUtente").innerHTML = `Il tuo numero è :${userNumber}`;

//calcolare e stampare il numero del computer
const computerNumber = Math.floor(Math.random() * (6)) + 1;
console.log(computerNumber, "Numero del computer");
document.getElementById("NumeroComputer").innerHTML = `Il numero del computer è :${computerNumber}`;

//stabilire il vincitore in base a chi fa il punteggio più alto e stampare il risultato
let gameresult 
    if (userNumber == computerNumber) {
    gameresult = "Pareggio!";
    document.getElementById("Risultato").innerHTML = `Pareggio!`;
    }
    else if (userNumber < computerNumber) {
        gameresult = "Hai perso!"
        document.getElementById("Risultato").innerHTML = `Peccato hai perso!`;
    }
    else if (userNumber > computerNumber) {
        gameresult = "Hai vinto!"
        document.getElementById("Risultato").innerHTML = `Complimenti hai vinto!`;
    }

    console.log(gameresult);
    
    