// 1 - Mail
// Chiede all'utente la sua email;

var email = prompt("Ciao qual'è la tua E-mail?");

// controlla che sia nella lista di chi può accedere, nel caso contrario gli sara chiesto se ha possiede un codice segreto!;  

// lista invitati
var invited = ["floreantonio@hotmail.it", "antonioflore@hotmail.it", "matteo.r@gmail.com"];

// codice sgreto
var secretCode = "weeknd"

// messaggi
var messagge = "Ecco il tuo invito!"
var messaggeCodeKo = "Il codice è errato non puoi accreditarti!"
var messaggeCodeOk = "Perfetto, ti sei accreditato!"

// ciclo for per controllo e-mail
var inList = false;
for (var i = 0; i < invited.length; i++) {
    
    if ( invited[i] == email ) {
        inList = true;
    }
}

// messaggio di invito e controllo codice segreto
if (inList == true) {
    console.log("Ecco il tuo invito!");
    document.getElementById ("invitation").innerHTML = (messagge);
    
} else if (inList == false) {
    var code = prompt("Inserisci il codice segreto per accreditarti!");
}
    
    
checkCode = true;
if (secretCode !== code) {  
    checkCode = false;   
    console.log("Il codice è errato non puoi accreditarti!");
    document.getElementById ("invitation") .innerHTML = (messaggeCodeKo);
} else {
    invited.push(email);
    console.log(invited);
    console.log("Perfetto, ti sei accreditato!");
    document.getElementById ("invitation") .innerHTML = (messaggeCodeOk);
}
// stampa un messaggio appropriato sull'esito del controllo.