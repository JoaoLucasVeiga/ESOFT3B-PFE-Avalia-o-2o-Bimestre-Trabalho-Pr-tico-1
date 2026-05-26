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
Descritivo: Escreva um programa que encontre o maior número em um array de inteiros.
*******************************************************************************/

/*
 * LÓGICA DE RESOLUÇÃO:
 * 1. Solicita ao usuário a quantidade de elementos que o array terá.
 * 2. Lê cada número em um laço for e armazena em um array tipado (number[]).
 * 3. Utiliza Math.max() com spread operator (...numeros) para encontrar o maior valor.
 * 4. Exibe o array completo e o maior número identificado.
 *
 * Conceitos TypeScript utilizados:
 *   - Array tipado: number[] — garante que apenas números sejam armazenados
 *   - Spread operator com Math.max: evita laço manual de comparação
 *   - Template literals para exibição formatada
 */

import * as readlineSync from 'readline-sync';

/**
 * Executa o Exercício 7: Encontra o maior número em um array de inteiros.
 * O usuário define a quantidade de elementos e informa cada valor.
 */
export function exercicio07(): void {
  console.log('\n=== EXERCÍCIO 7 ===');
  console.log('Encontrar o maior número em um array\n');

  // Solicita a quantidade de elementos do array
  const entradaQtd: string = readlineSync.question('Quantos números deseja inserir no array? ');
  const quantidade: number = parseInt(entradaQtd, 10);

  // Valida a quantidade informada
  if (isNaN(quantidade) || quantidade <= 0) {
    console.log('\n[ERRO] A quantidade deve ser um número inteiro positivo.');
    return;
  }

  // Array tipado que armazenará os inteiros fornecidos pelo usuário
  const numeros: number[] = [];

  // Lê cada número e adiciona ao array
  for (let i: number = 0; i < quantidade; i++) {
    const entrada: string = readlineSync.question(`  Digite o ${i + 1}º número: `);
    const num: number = parseInt(entrada, 10);

    if (isNaN(num)) {
      console.log(`  [AVISO] Valor inválido ignorado. Inserindo 0 no lugar.`);
      numeros.push(0);
    } else {
      numeros.push(num);
    }
  }

  // Encontra o maior valor usando Math.max com spread operator
  const maiorNumero: number = Math.max(...numeros);

  // Encontra a posição (índice) do maior número no array
  const indiceMaior: number = numeros.indexOf(maiorNumero);

  // Exibe os resultados
  console.log(`\nArray informado: [${numeros.join(', ')}]`);
  console.log(`Maior número: ${maiorNumero} (posição ${indiceMaior + 1} do array)`);
}
