/******************************************************************************
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
Descritivo: Escreva um programa que leia 5 números do usuário e os armazene em um array, depois
exiba todos os números.
******************************************************************************/

/*
  Como resolvi o problema:
  - Recebe a função 'pergunta' do index.ts para capturar entradas do usuário.
  - Um loop solicita 5 números ao usuário, convertendo cada entrada para número
    e armazenando no array 'numeros'.
  - Ao final, exibe todos os números armazenados no array.
*/

export async function exercicio06(
  pergunta: (texto: string) => Promise<string>
): Promise<void> {
  console.log("\n=== EXERCÍCIO 6 ===");
  console.log("Leitura de 5 números e armazenamento em array\n");

  const numeros: number[] = [];

  for (let i = 1; i <= 5; i++) {
    const entrada = await pergunta(`Digite o ${i}º número: `);
    const numero = parseFloat(entrada);

    if (isNaN(numero)) {
      console.log("Valor inválido. Encerrando exercício.");
      return;
    }

    numeros.push(numero);
  }

  console.log("\nNúmeros armazenados no array:");
  numeros.forEach((num, index) => {
    console.log(`  numeros[${index}] = ${num}`);
  });

  console.log(`\nArray completo: [${numeros.join(", ")}]`);

  await pergunta("\nPressione Enter para continuar...");
}