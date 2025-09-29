let numero;

do {
    numero = parseInt(prompt("Escolha um número de valor inteiro:"));
} while (isNaN(numero));

document.getElementById("numero").innerHTML = numero;

let reajuste = numero * 1.05;
document.getElementById("resultado").innerHTML = reajuste.toFixed(2);