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
Descritivo: 17 -  Escreva um programa que defina uma classe Pessoa com atributos nome e idade, e
métodos para exibir esses atributos.
***************************/

/*
  Solução:
  Definimos a classe Pessoa com dois atributos privados: nome (string) e idade (number).
  O construtor recebe os valores e os atribui.
  O método exibirDados() imprime os atributos no console de forma formatada.
  O método saudacao() retorna uma mensagem personalizada usando os atributos da pessoa.
  No programa principal, solicitamos nome e idade ao usuário, instanciamos a classe
  e chamamos os métodos de exibição.
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
 
class Pessoa {
  private nome: string;
  private idade: number;
 
  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }
 
  // Retorna o nome da pessoa
  getNome(): string {
    return this.nome;
  }
 
  // Retorna a idade da pessoa
  getIdade(): number {
    return this.idade;
  }
 
  // Exibe os atributos da pessoa no console
  exibirDados(): void {
    console.log("\n--- Dados da Pessoa ---");
    console.log(`Nome : ${this.nome}`);
    console.log(`Idade: ${this.idade} anos`);
    console.log("-----------------------");
  }
 
  // Método extra: gera uma saudação personalizada
  saudacao(): string {
    return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos!`;
  }
}
 
async function exercicio11(): Promise<void> {
  console.log("\n=== EXERCÍCIO 11 ===");
 
  const nome = await pergunta("Digite o nome da pessoa: ");
  const idadeStr = await pergunta("Digite a idade da pessoa: ");
  const idade = parseInt(idadeStr);
 
  if (isNaN(idade) || idade < 0) {
    console.log("Idade inválida. Por favor, informe um número positivo.");
  } else {
    const pessoa = new Pessoa(nome.trim(), idade);
    pessoa.exibirDados();
    console.log("\nSaudação: " + pessoa.saudacao());
  }
 
  await pergunta("\nPressione Enter para continuar...");
  rl.close();
}
 
exercicio11();