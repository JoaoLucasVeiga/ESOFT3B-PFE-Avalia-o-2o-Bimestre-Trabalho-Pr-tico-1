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
Descritivo: Escreva um programa que defina uma interface Veiculo com métodos acelerar()
            e frear(), e implemente essa interface em uma classe Carro.
*******************************************************************************/

/*
 * LÓGICA DE RESOLUÇÃO:
 * 1. Define a interface "Veiculo" — um contrato TypeScript que obriga qualquer
 *    classe que a implemente a fornecer os métodos acelerar() e frear().
 * 2. A classe "Carro" implementa "Veiculo" e gerencia o estado interno:
 *      - marca, modelo (readonly): identificação do veículo
 *      - ligado (boolean): controla se o motor está ligado
 *      - velocidadeAtual (number): velocidade em km/h
 *      - incremento (number): valor em km/h adicionado/subtraído por ação
 * 3. acelerar() só funciona se o carro estiver ligado; aumenta velocidadeAtual.
 * 4. frear() reduz velocidadeAtual, nunca abaixo de 0 (Math.max).
 * 5. Um sub-menu interativo permite ao usuário ligar/desligar, acelerar e frear.
 *
 * Conceitos TypeScript utilizados:
 *   - interface: define contrato sem implementação
 *   - implements: garante que a classe respeita o contrato da interface
 *   - private / readonly: encapsulamento e imutabilidade de atributos
 *   - Tipagem explícita em todos os membros e parâmetros
 */

import * as readlineSync from 'readline-sync';

// ─── INTERFACE ───────────────────────────────────────────────────────────────

/**
 * Interface Veiculo: define o contrato básico que qualquer veículo deve cumprir.
 * Qualquer classe que implemente esta interface PRECISA definir os métodos abaixo.
 */
interface Veiculo {
  /** Aumenta a velocidade do veículo */
  acelerar(): void;
  /** Reduz a velocidade do veículo */
  frear(): void;
}

// ─── CLASSE ───────────────────────────────────────────────────────────────────

/**
 * Classe Carro: implementa a interface Veiculo.
 * Gerencia o estado completo de um veículo (ligado, velocidade, marca e modelo).
 */
class Carro implements Veiculo {
  // Atributos identificadores — imutáveis após a criação
  private readonly marca: string;
  private readonly modelo: string;

  // Estado dinâmico do carro
  private ligado: boolean;
  private velocidadeAtual: number;

  // Valor de incremento/decremento por ação de acelerar/frear (km/h)
  private readonly incremento: number;

  /**
   * Construtor da classe Carro.
   * @param marca     - Fabricante do veículo (ex: "Toyota")
   * @param modelo    - Modelo do veículo (ex: "Corolla")
   * @param incremento - Variação de velocidade por ação, padrão 10 km/h
   */
  constructor(marca: string, modelo: string, incremento: number = 10) {
    this.marca = marca;
    this.modelo = modelo;
    this.ligado = false;
    this.velocidadeAtual = 0;
    this.incremento = incremento;
  }

  // ─── MÉTODOS DA INTERFACE ──────────────────────────────────────────────────

  /**
   * Implementação de Veiculo.acelerar().
   * Só acelera se o carro estiver ligado.
   */
  public acelerar(): void {
    if (!this.ligado) {
      console.log('  [!] O carro está desligado. Ligue antes de acelerar.');
      return;
    }
    this.velocidadeAtual += this.incremento;
    console.log(`  >> Acelerando... Velocidade atual: ${this.velocidadeAtual} km/h`);
  }

  /**
   * Implementação de Veiculo.frear().
   * Reduz a velocidade, garantindo que nunca fique negativa.
   */
  public frear(): void {
    if (this.velocidadeAtual === 0) {
      console.log('  [!] O carro já está parado.');
      return;
    }
    // Math.max garante que a velocidade não fica abaixo de zero
    this.velocidadeAtual = Math.max(0, this.velocidadeAtual - this.incremento);
    console.log(`  >> Freando... Velocidade atual: ${this.velocidadeAtual} km/h`);
  }

  // ─── MÉTODOS ADICIONAIS ────────────────────────────────────────────────────

  /** Liga o motor do carro */
  public ligar(): void {
    if (this.ligado) {
      console.log('  [!] O carro já está ligado.');
      return;
    }
    this.ligado = true;
    console.log('  >> Motor ligado. Pronto para dirigir!');
  }

  /** Desliga o motor do carro (somente se parado) */
  public desligar(): void {
    if (!this.ligado) {
      console.log('  [!] O carro já está desligado.');
      return;
    }
    if (this.velocidadeAtual > 0) {
      console.log('  [!] Freie o carro completamente antes de desligar.');
      return;
    }
    this.ligado = false;
    console.log('  >> Motor desligado.');
  }

  /** Exibe o painel de informações do carro */
  public exibirPainel(): void {
    const statusMotor: string = this.ligado ? 'LIGADO  ✔' : 'DESLIGADO ✘';
    const barraVelocidade: string = this.gerarBarraVelocidade();

    console.log('\n  ┌─────────────────────────────────────┐');
    console.log(`  │ Veículo : ${this.marca} ${this.modelo}`);
    console.log(`  │ Motor   : ${statusMotor}`);
    console.log(`  │ Vel.    : ${this.velocidadeAtual} km/h ${barraVelocidade}`);
    console.log('  └─────────────────────────────────────┘');
  }

  /**
   * Gera uma barra visual de velocidade para o painel.
   * @returns string com blocos representando a velocidade
   */
  private gerarBarraVelocidade(): string {
    const maxVel: number = 100;
    const totalBlocos: number = 10;
    const blocos: number = Math.min(
      Math.round((this.velocidadeAtual / maxVel) * totalBlocos),
      totalBlocos
    );
    return '[' + '█'.repeat(blocos) + '░'.repeat(totalBlocos - blocos) + ']';
  }
}

// ─── FUNÇÃO EXPORTADA ─────────────────────────────────────────────────────────

/**
 * Executa o Exercício 13: demonstração interativa da interface Veiculo e classe Carro.
 */
export function exercicio13(): void {
  console.log('\n=== EXERCÍCIO 13 ===');
  console.log('Classe Carro com Interface Veiculo\n');

  // Solicita dados do carro ao usuário
  const marca: string  = readlineSync.question('Digite a marca do carro  : ');
  const modelo: string = readlineSync.question('Digite o modelo do carro : ');

  // Solicita o incremento de velocidade (com valor padrão 10)
  const entradaInc: string   = readlineSync.question('Incremento de velocidade (km/h) [padrão 10]: ');
  const incremento: number   = parseInt(entradaInc, 10);
  const incFinal: number     = isNaN(incremento) || incremento <= 0 ? 10 : incremento;

  // Instancia a classe — a variável é tipada como Carro (implementa Veiculo)
  const carro: Carro = new Carro(marca, modelo, incFinal);
  console.log(`\nCarro "${marca} ${modelo}" criado com sucesso!`);

  // Sub-menu interativo de controle do carro
  let continuar: boolean = true;
  while (continuar) {
    carro.exibirPainel();
    console.log('\n  1 - Ligar o motor');
    console.log('  2 - Acelerar');
    console.log('  3 - Frear');
    console.log('  4 - Desligar o motor');
    console.log('  0 - Voltar ao menu principal\n');

    const opcao: string = readlineSync.question('  Escolha uma ação: ');

    switch (opcao) {
      case '1':
        carro.ligar();
        break;
      case '2':
        carro.acelerar();
        break;
      case '3':
        carro.frear();
        break;
      case '4':
        carro.desligar();
        break;
      case '0':
        continuar = false;
        break;
      default:
        console.log('  [!] Opção inválida. Escolha entre 0 e 4.');
    }
  }
}
