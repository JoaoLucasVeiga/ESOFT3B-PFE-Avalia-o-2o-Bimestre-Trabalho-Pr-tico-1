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
Descritivo: Escreva um programa que exiba apenas os números pares de 1 a 20.
***************************/

/*
  Solução:
  Utilizaremos um laço for que percorre os números de 1 a 20.
  A cada iteração, verificamos se o número é divisível por 2 (resto == 0).
  Se for, exibimos no console. Simples e direto.
*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const exercicio05 = function(): void {
  console.log("\n=== EXERCÍCIO 5 ===");
  console.log("Números pares de 1 a 20:\n");

  const pares: number[] = [];

  for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      pares.push(i);
    }
  }


  rl.question("\nPressione Enter para continuar...", () => {
    rl.close();
  });
}

exercicio05();