/**************************
Curso: Engenharia de Software
Disciplina: Programação Front-End
Professor: José Carlos Flores
Turma: ESOFT3B
Componentes: 
             25001118-2 -  Emanuel Gomes de Almeida 
             25033056-2 -  Gabriel Michels Cubas
             25164719-2 -  Rafael Maia
             25291090-2 -  João Lucas Veiga de Carvalho
             25363242-2 -  Euclides Benedito Modesto Coelho Neto
             25357453-2 -  Leonardo De Jesus Sabino Flugel
Data: 19 de Maio de 2026
Descritivo: Escreva um programa que ordene um array de números em ordem crescente.
***************************/

let numeros: number[] = [8, 3, 15, 1, 9, 2];

console.log("Array original:");
console.log(numeros);

// Ordenação crescente
numeros.sort((a, b) => a - b);

console.log("Array em ordem crescente:");
console.log(numeros);

/*
Explicação:
O método sort() organiza os números.
A função (a - b) garante a ordenação crescente.
*/