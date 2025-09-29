const primeiro = confirm("O primeira variável é VERDADEIRO ou FALSO?");

const segundo = confirm("O segunda variável é VERDADEIRO ou FALSO?");

if (primeiro && segundo) {
    document.getElementById("resultado").innerHTML = "As duas variáveis são VERDADEIRAS";
} else if (primeiro || segundo) {
    if (primeiro) {
        document.getElementById("resultado").innerHTML = "Apenas a primeira variável é VERDADEIRA";
    } else {
        document.getElementById("resultado").innerHTML = "Apenas a segunda variável é VERDADEIRA";
    }
} else {
    document.getElementById("resultado").innerHTML = "As duas variáveis são FALSAS";
}