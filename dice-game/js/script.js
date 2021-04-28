// 2 - Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
var casualNumberPc = Math.floor(Math.random()*6+1);
// console.log(casualNumberPc);
// stampa numero casuale pc
document.getElementById("pc").innerHTML=("Pc  " + casualNumberPc);

var casualNumberG1 = Math.floor(Math.random()*6+1);
// console.log(casualNumberPc);
// stampa numero casuale G1
document.getElementById("g1").innerHTML=("Player  " + casualNumberG1);

// Stabilire il vincitore, in base a chi fa il punteggio più alto.
if (casualNumberPc > casualNumberG1) {
document.getElementById("risultato").innerHTML=("Pc vince");
}

if (casualNumberPc == casualNumberG1) {
document.getElementById("risultato").innerHTML=("Pareggio");
}

if (casualNumberPc < casualNumberG1) {
document.getElementById("risultato").innerHTML=("Giocatore vince")
}

function myFunction() {
    document.getElementById("risultato").innerHTML=(casualNumberG1);
}

function refreshPage() {
    window.location.reload(casualNumberPc, casualNumberG1);
}
