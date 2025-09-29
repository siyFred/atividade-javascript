let numero;
do {
    numero = parseInt(prompt("Escolha um número de valor inteiro:"));
} while (isNaN(numero));

document.getElementById("numero").innerHTML = numero;

if (numero > 0) {
    document.getElementById("res1").innerHTML = ("positivo");
} else if (numero < 0) {
    document.getElementById("res1").innerHTML = ("negativo");
} else {
    document.getElementById("res1").innerHTML = ("neutro");
}

if (numero % 2 === 0) {
    document.getElementById("res2").innerHTML = ("par");
} else {
    document.getElementById("res2").innerHTML = ("ímpar");
}