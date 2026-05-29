"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function mostrarMenu() {
    console.log("\n========= MENU DE EXERCÍCIOS =========");
    console.log("1 - Escreva um programa que receba dois números inteiros e exiba a soma deles.");
    console.log("2 - Escreva um programa que leia um número inteiro e informe se ele é par ou ímpar.");
    console.log("3 - Escreva um programa que calcule a média de três notas fornecidas pelo usuário.");
    console.log("4 - Faça um programa que converta uma temperatura em graus Celsius para Fahrenheit, utilizando a fórmula: F = (C × 9/5) + 32.");
    console.log("5 - Escreva um programa que exiba apenas os números pares de 1 a 20.");
    console.log("6 - Escreva um programa que leia 5 números do usuário e os armazene em um array, depois exiba todos os números");
    console.log("7 - Escreva um programa que encontre o maior número em um array de inteiros.");
    console.log("8 - Escreva um programa que conte o número de vogais em uma string fornecida pelo usuário.");
    console.log("9 - Criar uma calculadora simples de quatro operações (+ - * /).");
    console.log("10 - Escreva um programa que ordene um array de números em ordem crescente.");
    console.log("11 - Escreva um programa que defina uma classe Pessoa com atributos nome e idade, e métodos para exibir esses atributos.");
    console.log("12 - Escreva um programa que use herança para criar uma classe Aluno que herda de Pessoa e adiciona um atributo matricula.");
    console.log("13 - Escreva um programa que defina uma interface Veiculo com métodos acelerar() e frear(), e implemente essa interface em uma classe Carro.");
    console.log("14 - Escreva um programa que solicite um número inteiro e exiba sua tabuada de 1 a 10.");
    console.log("15 - Implemente uma calculadora de Índice de Massa Corporal (IMC) que receba peso (kg) e altura (m) e exiba o resultado com a classificação correspondente (ex: abaixo do peso, normal, etc.).");
    console.log("16 -  Escreva um programa que valide uma senha de acordo com os seguintes critérios:\n • Pelo menos 8 caracteres\n • Pelo menos uma letra maiúscula\n • Pelo menos uma letra minúscula\n • Pelo menos um número");
    console.log("17 - Desenvolva um jogo onde o computador sorteie um número entre 1 e 100, e o usuário tente adivinhá-lo. O programa deve dar dicas (\"maior\" ou \"menor\") até o acerto.");
    console.log("18 - Desenvolva um programa que conte quantas palavras existem em uma string fornecida pelo usuário.");
    console.log("0 - Sair");
    console.log("======================================");
    rl.question("Escolha um exercício: ", (resposta) => {
        const opcao = Number(resposta);
        mostrarMenu();
    });
}
mostrarMenu();
//# sourceMappingURL=index.js.map