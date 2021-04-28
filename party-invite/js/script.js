// 1 - Mail
// Chiedi all'utente la sua email,
var email = prompt("Ciao qual'è la tua E-mail?");

// controlla che sia nella lista di chi può accedere,
var invited = ["floreantonio@hotmail.it", "antonioflore@hotmail.it", "matteo.r@gmail.com"];

var secretCode = "weeknd"

var inList = false;
for (var i = 0; i < invited.length; i++) {
    
    if ( invited[i] == email ) {
        inList = true;
    }
}

if (inList == true) {
    console.log("Ecco il tuo invito!");
} else if (inList == false) {
    var code = prompt("Inserisci il codice segreto per accreditarti!")
} 

checkCode = true;
if (secretCode !== code) {
    checkCode = false;
    console.log("Il codice è errato non puoi accreditarti!");
} else {
    invited.push(email);
    console.log(invited);
    console.log("Perfetto, ti sei accreditato!");
}
// stampa un messaggio appropriato sull'esito del controllo.