// 1 - Mail
// Chiedi all'utente la sua email,
var email = prompt("Ciao qual'è la tua E-mail?");
console.log(email);

// controlla che sia nella lista di chi può accedere,
var invited = ["floreantonio@htomail.it", "antonioflore@hotmail.it", "matteo.r@gmail.com"];
console.log(invited);

for (var i = 0; i < invited.length; i++) {

    if ( invited [i] == email ) {
        console.log("Ecco il tuo invito!");
    }
    
}
console.log("Non sei stato invitato, inserisci il codice segreto!");

// stampa un messaggio appropriato sull'esito del controllo.