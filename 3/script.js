let a, b, c;

do {
    a = parseInt(prompt("Digite um valor inteiro para A:"));
} while (isNaN(a));

do {
    b = parseInt(prompt("Digite um valor inteiro para B:"));
} while (isNaN(b));

if (a == b) {
    c = a + b;
} else {
    c = a * b;
}
document.getElementById("resultado").innerHTML = (c);