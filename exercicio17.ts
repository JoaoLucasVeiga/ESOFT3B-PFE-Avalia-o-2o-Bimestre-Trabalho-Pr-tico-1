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
Descritivo: 17 - Desenvolva um jogo onde o computador sorteie um número entre 1 e 100, e o usuário
tente adivinhá-lo. O programa deve dar dicas ("maior" ou "menor") até o acerto.

***************************/

/*
  Solução:
  O computador sorteia um número aleatório entre 1 e 100 usando Math.random().
  O programa entra em um loop que continua até o usuário acertar.
  A cada tentativa, comparamos o chute com o número sorteado:
    - Se o chute for menor, dizemos "Tente um número MAIOR".
    - Se for maior, dizemos "Tente um número MENOR".
    - Se acertar, exibimos parabéns e o total de tentativas usadas.
  Como bônus, calculamos e exibimos uma pontuação baseada no número de tentativas.
*/

const readline = require("readline");
 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
 
// Função auxiliar para perguntas assíncronas
function pergunta(texto: string): Promise<string> {
  return new Promise((resolve) => rl.question(texto, resolve));
}
 
// Gera número aleatório entre min e max (inclusivo)
function numeroAleatorio(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
 
// Calcula pontuação baseada no número de tentativas
function calcularPontuacao(tentativas: number): string {
  if (tentativas <= 3) return "🏆 Incrível! Pontuação: S";
  if (tentativas <= 6) return "🥇 Excelente! Pontuação: A";
  if (tentativas <= 10) return "🥈 Bom trabalho! Pontuação: B";
  return "🥉 Continue praticando! Pontuação: C";
}
 
async function exercicio17(): Promise<void> {
  console.log("\n=== EXERCÍCIO 17 — JOGO DE ADIVINHAÇÃO ===");
  console.log("Tentei sortear um número entre 1 e 100...");
  console.log("Você consegue adivinhar qual é? Boa sorte!\n");
 
  const numeroSecreto: number = numeroAleatorio(1, 100);
  let tentativas: number = 0;
  let acertou: boolean = false;
 
  while (!acertou) {
    const entrada = await pergunta(`Tentativa ${tentativas + 1} — Digite seu chute: `);
    const chute = parseInt(entrada);
 
    if (isNaN(chute) || chute < 1 || chute > 100) {
      console.log("⚠️  Digite um número válido entre 1 e 100.\n");
      continue;
    }
 
    tentativas++;
 
    if (chute < numeroSecreto) {
      console.log("📈 Tente um número MAIOR!\n");
    } else if (chute > numeroSecreto) {
      console.log("📉 Tente um número MENOR!\n");
    } else {
      acertou = true;
      console.log(`\n🎉 PARABÉNS! Você acertou! O número era ${numeroSecreto}.`);
      console.log(`Você precisou de ${tentativas} tentativa(s).`);
      console.log(calcularPontuacao(tentativas));
    }
  }
 
  await pergunta("\nPressione Enter para continuar...");
  rl.close();
}
 
exercicio17();