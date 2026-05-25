const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mostrarMenu(): void {
    console.log("\n========= MENU DE EXERCÍCIOS =========");
    console.log("1 - Escreva um programa que receba dois números inteiros e exiba a soma deles.");
    console.log("2 - Escreva um programa que leia um número inteiro e informe se ele é par ou ímpar.");
    console.log("3 - Escreva um programa que calcule a média de três notas fornecidas pelo usuário.");
    console.log("4 - Faça um programa que converta uma temperatura em graus Celsius para Fahrenheit, utilizando a fórmula: F = (C × 9/5) + 32.");
    console.log("5 - Escreva um programa que exiba apenas os números pares de 1 a 20.");
    console.log("6 - Escreva um programa que leia 5 números do usuário e os armazene em um array, depois exiba todos os números");
    console.log("7 - Escreva um programa que encontre o maior número em um array de inteiros.");
    console.log("8 - Escreva um programa que conte o número de vogais em uma string fornecida pelo usuário.");
    console.log("9 - Criar uma calculadora simples de quatro operações (+ - * /).");
    console.log("10 - Escreva um programa que ordene um array de números em ordem crescente.");
    console.log("11 - Escreva um programa que defina uma classe Pessoa com atributos nome e idade, e métodos para exibir esses atributos.");
    console.log("12 - Escreva um programa que use herança para criar uma classe Aluno que herda de Pessoa e adiciona um atributo matricula.");
    console.log("13 - Escreva um programa que defina uma interface Veiculo com métodos acelerar() e frear(), e implemente essa interface em uma classe Carro.");
    console.log("14 - Escreva um programa que solicite um número inteiro e exiba sua tabuada de 1 a 10.");
    console.log("15 - Implemente uma calculadora de Índice de Massa Corporal (IMC) que receba peso (kg) e altura (m) e exiba o resultado com a classificação correspondente (ex: abaixo do peso, normal, etc.).");
    console.log("16 -  Escreva um programa que valide uma senha de acordo com os seguintes critérios:\n • Pelo menos 8 caracteres\n • Pelo menos uma letra maiúscula\n • Pelo menos uma letra minúscula\n • Pelo menos um número");
    console.log("17 - Desenvolva um jogo onde o computador sorteie um número entre 1 e 100, e o usuário tente adivinhá-lo. O programa deve dar dicas (\"maior\" ou \"menor\") até o acerto.");
    console.log("18 - Desenvolva um programa que conte quantas palavras existem em uma string fornecida pelo usuário.");

    console.log("0 - Sair");
    console.log("======================================");

   rl.question("Escolha um exercício: ", (resposta: string) => {
        const opcao = Number(resposta);

        switch (opcao) {
            case 1:
                rl.question("Digite o primeiro número: ", (a: string) => {
                    rl.question("Digite o segundo número: ", (b: string) => {
                        const num1 = Number(a);
                        const num2 = Number(b);

                        if (isNaN(num1) || isNaN(num2)) {
                            console.log("Digite apenas números válidos!");
                        } else {
                            console.log("Resultado:", num1 + num2);
                        }
                        
                        voltarAoMenu();
                    });
                });
            break;

            case 2:
                rl.question("Digite um número inteiro: ", (entrada: string) => {
                    const num = Number(entrada);
                    if (isNaN(num) || !Number.isInteger(num)) {
                        console.log("Digite um número inteiro válido!");
                    } else {
                        const resultado = num % 2 === 0 ? "PAR" : "ÍMPAR";
                        console.log(`O número ${num} é ${resultado}.`);
                    }
                    voltarAoMenu();
                });
            break;

            case 3:
                rl.question("Digite a primeira nota: ", (nota1: string) => {
                    rl.question("Digite a segunda nota: ", (nota2: string) => {
                        rl.question("Digite a terceira nota: ", (nota3: string) => {
                            const media: number = (Number(nota1) + Number(nota2) + Number(nota3)) / 3;
                            const situacao: string =
                                media >= 6 ? "APROVADO" : media >= 4 ? "RECUPERAÇÃO" : "REPROVADO";

                            console.log(`Média: ${media.toFixed(2)} - Situação: ${situacao}`);

                            voltarAoMenu();
                        });
                    });
                });
            break;
                
            case 4:
                let celsius: number = 24;

                console.log("==================================");
                console.log(" CONVERSOR DE TEMPERATURA ");
                console.log("==================================");

                console.log(`Temperatura inicial: ${celsius}°C`);

                /*
                Aplicação da fórmula:
                F = (C × 9/5) + 32
                */
                let fahrenheit: number = (celsius * 9/5) + 32;

                console.log("----------------------------------");

                console.log(`Temperatura convertida: ${fahrenheit.toFixed(2)}°F`);

                console.log("----------------------------------");

                // Informação adicional sobre o clima
                if (celsius <= 0) {
                    console.log("Classificação: Clima muito frio.");
                } else if (celsius >= 30) {
                    console.log("Classificação: Clima quente.");
                } else {
                    console.log("Classificação: Clima agradável.");
                }

                console.log("==================================");

                /*
                Explicação:
                O programa converte uma temperatura em
                graus Celsius para Fahrenheit utilizando
                a fórmula matemática da conversão.

                Também exibe uma classificação simples
                da temperatura informada.
                */
            voltarAoMenu();
            break;

            case 5:
                console.log("Números pares de 1 a 20:\n");
                const pares: number[] = [];

                    for (let i = 1; i <= 20; i++) {
                        if (i % 2 === 0) {
                        console.log(i);
                        }
                    }
            voltarAoMenu();
            break;

            case 7:
                rl.question("Quantos números deseja inserir no array? ", (entradaQtd: string) => {
                    const quantidade = Number(entradaQtd);

                    if (isNaN(quantidade) || quantidade <= 0) {
                        console.log("\n[ERRO] A quantidade deve ser um número inteiro positivo.");
                        mostrarMenu();
                        return;
                    }

                    const numeros: number[] = [];
                    let i = 0;

                    function pedirNumero() {
                        if (i < quantidade) {
                            rl.question(`Digite o ${i + 1}º número: `, (entrada: string) => {
                                const num = Number(entrada);

                                if (isNaN(num)) {
                                    console.log("Valor inválido. Inserindo 0.");
                                    numeros.push(0);
                                } else {
                                    numeros.push(num);
                                }

                                i++;
                                pedirNumero(); 
                            });
                        } else {
                            const maiorNumero = Math.max(...numeros);
                            const indiceMaior = numeros.indexOf(maiorNumero);

                            console.log(`\nArray informado: [${numeros.join(", ")}]`);
                            console.log(`Maior número: ${maiorNumero} (posição ${indiceMaior + 1})`);

                            voltarAoMenu();
                        }
                    }

                    pedirNumero();
                });
            break;

            case 8:
                rl.question("Digite uma string: ", (entrada: string) => {
                    const vogais = entrada.match(/[aeiouAEIOU]/g);
                    const quantidadeVogais = vogais ? vogais.length : 0;
                    console.log(`A string "${entrada}" contém ${quantidadeVogais} vogais.`);
                    voltarAoMenu();
                });
            break;

            case 9:
                rl.question("primeiro Numero: ", (entrada1: string) => {
                    const num1 = Number(entrada1);
                    rl.question("segundo Numero: ", (entrada2: string) => {
                        const num2 = Number(entrada2);

                let resultado: number;
                
                rl.question("escolha a operacao | +,-,*,/ |: ", (op: string) => {
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

                voltarAoMenu();
                }
                );
            }); 
            });
            break;

            case 10:
            let numeros: number[] = [8, 3, 15, 1, 9, 2];

                console.log("Array original:");
                console.log(numeros);

                // Ordenação crescente
                numeros.sort((a, b) => a - b);

                console.log("Array em ordem crescente:");
                console.log(numeros);

                /*
                Explicação:
                O método sort() organiza os números.
                A função (a - b) garante a ordenação crescente.
                */
            voltarAoMenu();
            break;

            case 11:
                class Pessoa {
                    private nome: string;
                    private idade: number;
                    constructor(nome: string, idade: number) {
                        this.nome = nome;
                        this.idade = idade;
                    }
                    exibirInfo(): void {
                        console.log(`Nome: ${this.nome}`);
                        console.log(`Idade: ${this.idade} anos`);
                    }
                }
                rl.question("Digite o nome da pessoa: ", (nome: string) => {
                    rl.question("Digite a idade da pessoa: ", (idade: string) => {
                        const pessoa = new Pessoa(nome, Number(idade));
                        console.log("\nInformações da Pessoa:");
                        pessoa.exibirInfo();

                        voltarAoMenu();
                    });
                });
            break;

            case 13:
                interface Veiculo {
                    acelerar(): void;
                    frear(): void;
                }

                class Carro implements Veiculo {
                    private readonly marca: string;
                    private readonly modelo: string;
                    private ligado: boolean;
                    private velocidadeAtual: number;
                    private readonly incremento: number;

                    constructor(marca: string, modelo: string, incremento: number = 10) {
                        this.marca = marca;
                        this.modelo = modelo;
                        this.ligado = false;
                        this.velocidadeAtual = 0;
                        this.incremento = incremento;
                    }

                    acelerar(): void {
                        if (!this.ligado) {
                            console.log("Ligue o carro primeiro!");
                            return;
                        }
                        this.velocidadeAtual += this.incremento;
                        console.log("Velocidade:", this.velocidadeAtual);
                    }

                    frear(): void {
                        if (this.velocidadeAtual === 0) {
                            console.log("Carro já parado");
                            return;
                        }
                        this.velocidadeAtual -= this.incremento;
                        if (this.velocidadeAtual < 0) this.velocidadeAtual = 0;

                        console.log("Velocidade:", this.velocidadeAtual);
                    }

                    ligar(): void {
                        this.ligado = true;
                        console.log("Carro ligado");
                    }

                    desligar(): void {
                        if (this.velocidadeAtual > 0) {
                            console.log("Pare o carro antes de desligar!");
                            return;
                        }
                        this.ligado = false;
                        console.log("Carro desligado");
                    }

                    painel(): void {
                        console.log(`\n${this.marca} ${this.modelo}`);
                        console.log(`Velocidade: ${this.velocidadeAtual} km/h`);
                        console.log(`Status: ${this.ligado ? "Ligado" : "Desligado"}`);
                    }
                }

                rl.question("Digite a marca do carro: ", (marca: string) => {
                    rl.question("Digite o modelo do carro: ", (modelo: string) => {
                        rl.question("Incremento (padrão 10): ", (inc: string) => {

                            const incremento = Number(inc) > 0 ? Number(inc) : 10;

                            const carro = new Carro(marca, modelo, incremento);

                            function menuCarro() {
                                carro.painel();

                                console.log("\n1 - Ligar");
                                console.log("2 - Acelerar");
                                console.log("3 - Frear");
                                console.log("4 - Desligar");
                                console.log("0 - Voltar");

                                rl.question("Escolha: ", (opcao: string) => {

                                    switch (opcao) {
                                        case "1":
                                            carro.ligar();
                                            break;

                                        case "2":
                                            carro.acelerar();
                                            break;

                                        case "3":
                                            carro.frear();
                                            break;

                                        case "4":
                                            carro.desligar();
                                            break;

                                        case "0":
                                            voltarAoMenu();
                                            return;

                                        default:
                                            console.log("Opção inválida!");
                                    }

                                    menuCarro(); // loop correto
                                });
                            }

                            menuCarro();
                        });
                    });
                });
            break;

            case 14:
                rl.question("Digite um número inteiro para ver sua tabuada: ", (entrada: string) => {
                    const num = Number(entrada);
                    if (isNaN(num) || !Number.isInteger(num)) {
                        console.log("Digite um número inteiro válido!");
                        voltarAoMenu();
                        return;
                    }
                    console.log(`Tabuada de ${num}:\n`);
                    for (let i = 1; i <= 10; i++) {
                        console.log(`${num} x ${i} = ${num * i}`);
                    }
                    voltarAoMenu();
                });
            break;

            case 15:
                rl.question("Peso (kg): ", (pesoInput: string) => {
                    const peso = Number(pesoInput);

                    rl.question("Altura (cm): ", (alturaInput: string) => {
                        const alturaCm = Number(alturaInput);

                        if (isNaN(peso) || isNaN(alturaCm) || peso <= 0 || alturaCm <= 0) {
                            console.log("Valores inválidos!");
                            return;
                        }

                        const altura = alturaCm / 100;

                        const imc = peso / (altura * altura);

                        let situacao = "";

                        if (imc < 18.5) {
                            situacao = "ABAIXO DO PESO";
                        } else if (imc < 25) {
                            situacao = "NORMAL";
                        } else if (imc < 30) {
                            situacao = "SOBREPESO";
                        } else {
                            situacao = "OBESIDADE";
                        }

                        console.log(`\nIMC: ${imc.toFixed(2)}`);
                        console.log(`Situação: ${situacao}`);
                        voltarAoMenu();
                    });
                });
            break;

            case 16:
                let senha: string = "Teste123";
                
                let possuiMaiuscula = /[A-Z]/.test(senha);
                let possuiMinuscula = /[a-z]/.test(senha);
                let possuiNumero = /[0-9]/.test(senha);
                let tamanhoValido = senha.length >= 8;

                // Contador de requisitos atendidos
                let requisitosAtendidos = 0;

                if (possuiMaiuscula) requisitosAtendidos++;
                if (possuiMinuscula) requisitosAtendidos++;
                if (possuiNumero) requisitosAtendidos++;
                if (tamanhoValido) requisitosAtendidos++;

                if (
                    possuiMaiuscula &&
                    possuiMinuscula &&
                    possuiNumero &&
                    tamanhoValido
                ) {

                    console.log("Senha válida!");
                    console.log("Todos os requisitos foram atendidos.");

                } else {

                    console.log("Senha inválida!");
                    console.log("Critérios não atendidos:");

                    if (!tamanhoValido) {
                        console.log("- Deve possuir no mínimo 8 caracteres.");
                    }

                    if (!possuiMaiuscula) {
                        console.log("- Deve conter uma letra maiúscula.");
                    }

                    if (!possuiMinuscula) {
                        console.log("- Deve conter uma letra minúscula.");
                    }

                    if (!possuiNumero) {
                        console.log("- Deve conter pelo menos um número.");
                    }
                }

                console.log("----------------------------------");
                console.log(`Requisitos atendidos: ${requisitosAtendidos}/4`);

                // Classificação da senha
                if (requisitosAtendidos <= 2) {
                    console.log("Nível da senha: FRACA");
                } else if (requisitosAtendidos == 3) {
                    console.log("Nível da senha: MÉDIA");
                } else {
                    console.log("Nível da senha: FORTE");
                }

                console.log("==================================");

                /*
                Explicação:
                O programa utiliza expressões regulares (RegEx) para validar os critérios da senha.

                Além disso, também exibe:
                - requisitos atendidos
                - critérios faltando
                - nível de segurança da senha
                */
            voltarAoMenu();   
            break;

            case 17:
                console.log("Tentei sortear um número entre 1 e 100...");
                console.log("Você consegue adivinhar qual é? Boa sorte!\n");

                const numeroSecreto = Math.floor(Math.random() * 100) + 1;
                let tentativas = 0;

                function jogar() {
                    rl.question(`Tentativa ${tentativas + 1} — Digite seu chute: `, (entrada: string) => {
                        const chute = Number(entrada);

                        if (isNaN(chute) || chute < 1 || chute > 100) {
                            console.log("⚠️ Digite um número válido entre 1 e 100.\n");
                            jogar();
                            return;
                        }

                        tentativas++;

                        if (chute < numeroSecreto) {
                            console.log("📈 Tente um número MAIOR!\n");
                            jogar();
                        } 
                        else if (chute > numeroSecreto) {
                            console.log("📉 Tente um número MENOR!\n");
                            jogar();
                        } 
                        else {
                            console.log(`\n🎉 PARABÉNS! Você acertou! O número era ${numeroSecreto}.`);
                            console.log(`Você precisou de ${tentativas} tentativa(s).`);
                        }

                        voltarAoMenu();
                    });
                }

                jogar();

            break;

            case 0:
                console.log("Programa encerrado.");
                rl.close();
                return;

            default:
            console.log("Opção inválida!");
            voltarAoMenu();
            break;
        }
    });
}
        function voltarAoMenu() {
    rl.question("\nAperte Enter para voltar ao menu...", () => {
        mostrarMenu();
    });
}
mostrarMenu();