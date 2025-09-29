let numero;

do {
    numero = parseInt(prompt("Escolha um número de valor inteiro:"));
} while (isNaN(numero));

document.getElementById("numero").innerHTML = numero;
document.getElementById("res1").innerHTML = numero - 1;
document.getElementById("res2").innerHTML = numero + 1;