/**************************
Curso: Engenharia de Software
Disciplina: Programação Front-End
Professor: José Carlos Flores
Turma: ESOFT3B

Componentes: 
             25001118-2 - Emanuel Gomes de Almeida 
             25033056-2 - Gabriel Michels Cubas
             25164719-2 - Rafael Maia
             25291090-2 - João Lucas Veiga de Carvalho
             25363242-2 - Euclides Benedito Modesto Coelho Neto
             25357453-2 - Leonardo De Jesus Sabino Flugel

Data: 19 de Maio de 2026

Descritivo:
Programa que converte uma temperatura em graus Celsius
para Fahrenheit utilizando a fórmula:
F = (C × 9/5) + 32.
***************************/

// Temperatura em Celsius
let celsius: number = 24;

console.log("==================================");
console.log(" CONVERSOR DE TEMPERATURA ");
console.log("==================================");

console.log(`Temperatura inicial: ${celsius}°C`);

/*
Aplicação da fórmula:
F = (C × 9/5) + 32
*/
let fahrenheit: number = (celsius * 9/5) + 32;

console.log("----------------------------------");

console.log(`Temperatura convertida: ${fahrenheit.toFixed(2)}°F`);

console.log("----------------------------------");

// Informação adicional sobre o clima
if (celsius <= 0) {
    console.log("Classificação: Clima muito frio.");
} else if (celsius >= 30) {
    console.log("Classificação: Clima quente.");
} else {
    console.log("Classificação: Clima agradável.");
}

console.log("==================================");

/*
Explicação:
O programa converte uma temperatura em
graus Celsius para Fahrenheit utilizando
a fórmula matemática da conversão.

Também exibe uma classificação simples
da temperatura informada.
*/