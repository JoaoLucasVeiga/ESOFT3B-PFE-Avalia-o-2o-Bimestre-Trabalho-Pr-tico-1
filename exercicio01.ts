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
Descritivo: Escreva um programa que receba dois números inteiros e exiba a soma deles.
*******************************************************************************/

/*
 * LÓGICA DE RESOLUÇÃO:
 * 1. Solicita ao usuário dois números via console.
 * 2. Converte as strings recebidas para inteiro usando parseInt().
 * 3. Verifica se os valores são números válidos (NaN check).
 * 4. Realiza a soma aritmética e exibe o resultado formatado.
 *
 * Tipos TypeScript utilizados:
 *   - number: para armazenar os operandos e o resultado
 *   - string: para capturar a entrada bruta do usuário
 */

import * as readlineSync from 'readline-sync';

/**
 * Executa o Exercício 1: Soma de dois números inteiros.
 * Lê dois valores inteiros fornecidos pelo usuário e exibe a soma.
 */
export function exercicio01(): void {
  console.log('\n=== EXERCÍCIO 1 ===');
  console.log('Soma de dois números\n');

  // Lê a entrada como string e converte para inteiro (base 10)
  const entrada1: string = readlineSync.question('Digite o primeiro número para soma: ');
  const num1: number = parseInt(entrada1, 10);

  const entrada2: string = readlineSync.question('Digite o segundo número para soma: ');
  const num2: number = parseInt(entrada2, 10);

  // Valida se as entradas são números válidos
  if (isNaN(num1) || isNaN(num2)) {
    console.log('\n[ERRO] Por favor, digite apenas números inteiros válidos.');
    return;
  }

  // Calcula e exibe a soma
  const soma: number = num1 + num2;
  console.log(`\nResultado: ${num1} + ${num2} = ${soma}`);
}
