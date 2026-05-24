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
Descritivo:  Implemente uma calculadora de Índice de Massa Corporal (IMC) que receba peso (kg) e
altura (m) e exiba o resultado com a classificação correspondente (ex: abaixo do peso,
normal, etc.).
*******************************************************************************/

/*
 * RESOLUÇÃO DO PROBLEMA:
 *
 * 1. FUNÇÃO DE VALIDAÇÃO: 'NumDecimal' garante que o usuário digite números válidos.
 *    -Converte vírgula em ponto
 *    -Valida se a entrada é realmente um número
 *    -Usa recursão para pedir novamente se inválido
 *
 * 2. CAPTURA DE DADOS: Obtém o peso e altura do usuário.
 *
 * 3. CÁLCULO DO IMC: Aplica a fórmula matemática:
 *    IMC = peso / (altura * altura)
 *
 * 4. CLASSIFICAÇÃO: Usa operador para categorizar o IMC:
 *    -Se IMC >= 25: OBESIDADE
 *    -Se IMC >= 18.5 e < 25: NORMAL
 *    -Se IMC < 18.5: ABAIXO DO PESO
 *
 * 5. EXIBIÇÃO: Mostra o valor do IMC com 2 casas decimais e sua classificação.
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

export function exercicio15(): void {
  console.log("\n=== EXERCÍCIO 15 - Calcular IMC ===");

  const peso = NumDecimal("Peso: ");
  const altura = NumDecimal("Altura: ");

  const imc: number = peso / (altura * altura);
  const situacao: string =
    imc >= 25 ? "OBESIDADE" : imc >= 18.5 ? "NORMAL" : "ABAIXO DO PESO";

  console.log(`IMC: ${imc.toFixed(2)} - Situação: ${situacao}`);
}
