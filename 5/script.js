let salario, salario_minimo, quant_salarios;

do {
    salario = parseInt(prompt("Digite o valor do seu salário:"));
} while (isNaN(salario));

document.getElementById("salario").innerHTML = salario;

salario_minimo = 1525;

quant_salarios = salario / salario_minimo;

document.getElementById("resultado").innerHTML = ("equivale a ") + quant_salarios.toFixed(1) + (" salários mínimos.");