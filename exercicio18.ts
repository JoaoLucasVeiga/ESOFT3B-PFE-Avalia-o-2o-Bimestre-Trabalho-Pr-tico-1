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
Descritivo:  Desenvolva um programa que conte quantas palavras existem em uma string fornecida
pelo usuário.
******************************************************************************/

/*
  Como resolvi o problema:
  - Recebe a função 'pergunta' do index.ts para capturar a entrada do usuário.
  - A string é tratada com trim() para remover espaços nas extremidades.
  - Caso esteja vazia, retorna 0 palavras.
  - Caso contrário, usa split() com a expressão regular (\s+) que divide
    a string em qualquer sequência de espaços, contando as palavras corretamente.
*/

function contarPalavras(frase: string): number {
  const fraseAjustada = frase.trim();
  if (fraseAjustada === "") return 0;
  return fraseAjustada.split(/\s+/).length;
}

export async function exercicio18(
  pergunta: (texto: string) => Promise<string>
): Promise<void> {
  console.log("\n=== EXERCÍCIO 18 ===");
  console.log("Contador de palavras em uma string\n");

  const frase = await pergunta("Digite uma frase: ");

  const quantidade = contarPalavras(frase);

  console.log(`\nFrase digitada : "${frase}"`);
  console.log(`Número de palavras: ${quantidade}`);

  await pergunta("\nPressione Enter para continuar...");
}