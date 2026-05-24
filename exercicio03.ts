/******************************************************************************
Curso: Engenharia de Software
Disciplina: Programação Front-End
Professor: José Carlos Domingues Flores
Turma: ESOFT3B
Componentes:
             25001118-2 -  Emanuel Gomes de Almeida
             25033056-2 -  Gabriel Michels Cubas
             25164719-2 -  Rafael Maia
             25291090-2 -  João Lucas Veiga de Carvalho
             25363242-2 -  Euclides Benedito Modesto Coelho Neto
             25357453-2 -  Leonardo De Jesus Sabino Flugel
Data: 09 de Maio de 2026
Descritivo:  Escreva um programa que calcule a média de três notas fornecidas pelo usuário.
*******************************************************************************/

/*
 * RESOLUÇÃO DO PROBLEMA:
 *
 * 1. CAPTURA DE DADOS: Utiliza 'readlineSync' para obter 3 notas do usuário
 *    (nota1, nota2, nota3) de forma interativa.
 *
 * 2. CÁLCULO DA MÉDIA: Aplica a fórmula matemática:
 *    média = (nota1 + nota2 + nota3) / 3
 *
 * 3. CLASSIFICAÇÃO: Usa operador ternário encadeado para definir a situação:
 *    - Se média >= 6: APROVADO
 *    - Se média >= 4 e < 6: RECUPERAÇÃO
 *    - Se média < 4: REPROVADO
 *
 * 4. EXIBIÇÃO: Mostra o resultado formatado com 2 casas decimais e a situação do aluno.
 */

import readlineSync from "readline-sync";

export function exercicio03(): void {
  console.log("\n=== EXERCÍCIO 3 - Calcular média de três notas ===");

  const nota1 = readlineSync.questionInt("Digite a primeira nota: ");
  const nota2 = readlineSync.questionInt("Digite a segunda nota: ");
  const nota3 = readlineSync.questionInt("Digite a terceira nota: ");

  const media: number = (nota1 + nota2 + nota3) / 3;
  const situacao: string =
    media >= 6 ? "APROVADO" : media >= 4 ? "RECUPERAÇÃO" : "REPROVADO";

  console.log(`Média: ${media.toFixed(2)} - Situação: ${situacao}`);
}
