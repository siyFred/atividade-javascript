let a, b, c, soma;

do {
    a = parseInt(prompt("Digite um valor inteiro para A:"));
} while (isNaN(a));

do {
    b = parseInt(prompt("Digite um valor inteiro para B:"));
} while (isNaN(b));

do {
    c = parseInt(prompt("Digite um valor inteiro para C:"));
} while (isNaN(c));

soma = a + b;
document.getElementById("soma").innerHTML = ("A soma entre A e B é: ") + soma;

if (soma > c) {
    document.getElementById("resultado").innerHTML = ("A soma entre A e B é maior que C.");
} else if (soma < c) {
    document.getElementById("resultado").innerHTML = ("A soma entre A e B é menor que C.");
} else {
    document.getElementById("resultado").innerHTML = ("A soma entre A e B é igual a C.");
}