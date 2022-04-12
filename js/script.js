/*Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.*/

const users = ["user@email.com", "mikael_bisceglia@libero.it", "spririto@libero.it", "francesco@msn.com" ];

// Chiedere all'utente il suo indirizzo email
const signIn = prompt("Se fai parte della lista superesclusivissima scrivi il tuo indirizzo e mail e accedi!");
console.log('utente accede', signIn);

// verificare se l'indirizzo email è nella lista
let userLogin = false;
for (let i = 0; i < users.length; i++) {
    const userCheck = users[i];
    if (userCheck === signIn) {
        userLogin = true;
    }
    console.log(userCheck, "L'indirizzo è mail inserito è presente nella lista?", userLogin);
}


console.log("Risultato finale:", userLogin);
// OUTPUT
// dire all'utente se il suo indirizzo email fa parte della lista e stampare il risultato
if ( userLogin === true ) {
    console.log("L'indirizzo email è presente nella lista");
    document.getElementById("loginResult").innerHTML = `Accesso consentito. Bentornato ${signIn}`;
} else {
    console.log("L'indirizzo email non è presente nella lista");
    document.getElementById("loginResult").innerHTML = `Ci dispiace, l'indirizzo e-mail inserito non rientra negli indirizzi abilitati all'accesso. Controlla se hai inserito correttamente i tuoi dati`;
}