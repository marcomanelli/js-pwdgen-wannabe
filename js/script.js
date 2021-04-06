var nome = prompt("Inserisci il tuo nome: ");
var cognome = prompt("Inserisci il tuo cognome: ");
var colore = prompt("Inserisci il tuo colore preferito: ");

var customPassword = nome + cognome + colore + 21;

console.log(customPassword);

document.getElementById('passwordGenerator').innerHTML = "La tua password personalizzata è " + customPassword;