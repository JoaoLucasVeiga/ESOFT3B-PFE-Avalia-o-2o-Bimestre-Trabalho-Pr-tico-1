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
Descritivo: Escreva um programa que use herança para criar uma classe Aluno que herda de
Pessoa e adiciona um atributo matricula.
******************************************************************************/

/*
  Como resolvi o problema:
  - A classe base 'Pessoa' possui os atributos nome e idade, com um método
    exibirDados() que os imprime no console.
  - A classe 'Aluno' herda de 'Pessoa' usando 'extends' e adiciona o atributo
    'matricula'. O método exibirDados() é sobrescrito com 'override' para
    também exibir a matrícula, chamando o método pai com 'super'.
  - Recebe a função 'pergunta' do index.ts para capturar as entradas do usuário.
*/

class Pessoa {
  nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  exibirDados(): void {
    console.log(`  Nome : ${this.nome}`);
    console.log(`  Idade: ${this.idade} anos`);
  }
}

class Aluno extends Pessoa {
  matricula: string;

  constructor(nome: string, idade: number, matricula: string) {
    super(nome, idade);
    this.matricula = matricula;
  }

  override exibirDados(): void {
    super.exibirDados();
    console.log(`  Matrícula: ${this.matricula}`);
  }
}

export async function exercicio12(
  pergunta: (texto: string) => Promise<string>
): Promise<void> {
  console.log("\n=== EXERCÍCIO 12 ===");
  console.log("Herança: Classe Aluno herda de Pessoa\n");

  const nome = await pergunta("Digite o nome do aluno: ");

  const idadeStr = await pergunta("Digite a idade do aluno: ");
  const idade = parseInt(idadeStr);

  if (isNaN(idade)) {
    console.log("Idade inválida. Encerrando exercício.");
    return;
  }

  const matricula = await pergunta("Digite a matrícula do aluno: ");

  const aluno = new Aluno(nome, idade, matricula);

  console.log("\nDados do Aluno:");
  aluno.exibirDados();

  await pergunta("\nPressione Enter para continuar...");
}