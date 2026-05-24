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
             25357453-2 -  Leonardo De Jesus Sabino FlugelData: 09 de Maio de 2026
Descritivo: Criar uma calculadora simples de quatro operações (+ - * /).
*******************************************************************************/

/*
 * RESOLUÇÃO DO PROBLEMA:
 *
 * 1. FUNÇÃO DE VALIDAÇÃO: 'NumDecimal' garante que o usuário digite números válidos.
 *    -Converte vírgula em ponto
 *    -Valida se a entrada é realmente um número
 *    -Usa recursão para pedir novamente se inválido
 *
 * 2. CAPTURA DE DADOS: Obtém dois números decimais e uma operação do usuário.
 *
 * 3. SELEÇÃO DE OPERAÇÃO: Usa 'switch case' para escolher qual operação executar:
 *    -case "+": executa adição (num1 + num2)
 *    -case "-": executa subtração (num1 - num2)
 *    -case "*": executa multiplicação (num1 * num2)
 *    -case "/": executa divisão (num1 / num2)
 *    -default: trata operações inválidas
 *
 * 4. EXIBIÇÃO: Mostra o resultado da operação selecionada.
 */

import readlineSync from "readline-sync";

function NumDecimal(pergunta: string): number {
  const resposta = readlineSync.question(pergunta);
  const valor = parseFloat(resposta.replace(",", "."));

  if (Number.isNaN(valor)) {
    console.log("Entrada inválida. Digite um número válido.");
    return NumDecimal(pergunta);
  }
  return valor;
}

export function exercicio09(): void {
  console.log("\n=== EXERCÍCIO 09 -  Calculadora Simples ===");

  const num1 = NumDecimal("primeiro Numero: ");
  const op = readlineSync.question("escolha a operacao |+,-,*,/|: ");
  const num2 = NumDecimal("segundo Numero: ");

  let resultado: number;

  switch (op) {
    case "+":
      resultado = num1 + num2;
      break;
    case "-":
      resultado = num1 - num2;
      break;
    case "*":
      resultado = num1 * num2;
      break;
    case "/":
      resultado = num1 / num2;
      break;
    default:
      console.log("Operação inválida.");
      return;
  }
  console.log(`Resultado: ${resultado}`);
}
