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
Data: 28 de Maio de 2026
Descritivo: exercicios do 1 ao 18
***************************/

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
                console.log("=== Exercício 1 ===");
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
            /* 
            Explicação:
            O programa lê um número inteiro do usuário, verifica se é válido e determina se é par ou ímpar usando o operador módulo (%). O resultado é exibido e o usuário tem a opção de voltar ao menu para escolher outro exercício.
            */

            case 2:
                console.log("=== Exercício 2 ===");
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
            /*
            Explicação:
            O programa solicita ao usuário que digite três notas, calcula a média aritmética dessas notas e determina a situação do aluno com base na média. A situação é classificada como "APROVADO" para médias iguais ou superiores a 6, "RECUPERAÇÃO" para médias entre 4 e 5.99, e "REPROVADO" para médias inferiores a 4. O resultado é exibido com a média formatada para duas casas decimais.
            */

            case 3:
                console.log("=== Exercício 3 ===");
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
            /*
            Explicação:
            O programa converte uma temperatura em graus Celsius para Fahrenheit utilizando a fórmula matemática da conversão. O resultado é exibido com duas casas decimais. Além disso, o programa classifica a temperatura informada como "Clima muito frio" para temperaturas iguais ou inferiores a 0°C, "Clima quente" para temperaturas iguais ou superiores a 30°C, e "Clima agradável" para temperaturas entre 1°C e 29°C.
            */
                
            case 4:
                console.log("=== Exercício 4 ===");
                rl.question("Digite a temperatura em graus Celsius: ", (entrada: string) => {
                    const celsius = Number(entrada);

                let fahrenheit: number = (celsius * 9/5) + 32;

                console.log("----------------------------------");

                console.log(`Temperatura convertida: ${fahrenheit.toFixed(2)}°F`);

                console.log("----------------------------------");

                if (celsius <= 0) {
                    console.log("Classificação: Clima muito frio.");
                } else if (celsius >= 30) {
                    console.log("Classificação: Clima quente.");
                } else {
                    console.log("Classificação: Clima agradável.");
                }

                console.log("==================================");
            voltarAoMenu();
                });
            break;
            /*
            Explicação:
            O programa converte uma temperatura em
            graus Celsius para Fahrenheit utilizando
            a fórmula matemática da conversão.

            Também exibe uma classificação simples
            da temperatura informada.
            */

            case 5:
                console.log("=== Exercício 5 ===");
                console.log("Números pares de 1 a 20:\n");
                const pares: number[] = [];

                    for (let i = 1; i <= 20; i++) {
                        if (i % 2 === 0) {
                        console.log(i);
                        }
                    }
            voltarAoMenu();
            break;
            /*
            Explicação:
            O programa utiliza um loop for para iterar de 1 a 20 e verifica se cada número é par usando o operador módulo (%). Se o número for par, ele é exibido no console. Após exibir os números pares, o programa oferece a opção de voltar ao menu para escolher outro exercício.
            */

            case 6:
                console.log("=== Exercício 6 ===");
                const numbers: number[] = [];
                let count = 0;
                function pedirNumero() {
                    if (count < 5) {
                        rl.question(`Digite o ${count + 1}º número: `, (entrada: string) => {
                            const num = Number(entrada);
                            if (isNaN(num)) {
                                console.log("Valor inválido. Inserindo 0.");
                                numbers.push(0);
                            } else {
                                numbers.push(num);
                            }
                            count++;
                            pedirNumero();
                        });
                    } else {
                        console.log(`\nArray informado: [${numbers.join(", ")}]`);
                        voltarAoMenu();
                    }
                }
                pedirNumero();
            break;
            /*
            Explicação:
            O programa lê 5 números do usuário, armazenando-os em um array. Ele valida cada entrada para garantir que seja um número, substituindo entradas inválidas por 0. Após coletar os 5 números, o programa exibe o array completo e oferece a opção de voltar ao menu para escolher outro exercício.
            */

            case 7:
                console.log("=== Exercício 7 ===");
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
            /*
            Explicação:
            O programa lê uma string do usuário e conta o número de vogais presentes nela, exibindo o resultado no console. Ele oferece a opção de voltar ao menu para escolher outro exercício.
            */    
                
            case 8:
                console.log("=== Exercício 8 ===");
                rl.question("Digite uma string: ", (entrada: string) => {
                    const vogais = entrada.match(/[aeiouAEIOU]/g);
                    const quantidadeVogais = vogais ? vogais.length : 0;
                    console.log(`A string "${entrada}" contém ${quantidadeVogais} vogais.`);
                    voltarAoMenu();
                });
            break;
            /*
            Explicação:
            O programa utiliza uma expressão regular para encontrar todas as vogais (tanto maiúsculas quanto minúsculas) em uma string fornecida pelo usuário. Ele conta o número de vogais encontradas e exibe o resultado no console. Após isso, o programa oferece a opção de voltar ao menu para escolher outro exercício.
            */
                
            case 9:
                console.log("=== Exercício 9 ===");
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
            /*
            Explicação:
            O programa implementa uma calculadora simples que realiza as quatro operações básicas (adição, subtração, multiplicação e divisão). Ele solicita ao usuário dois números e a operação desejada, realiza o cálculo correspondente e exibe o resultado. Após isso, o programa oferece a opção de voltar ao menu para escolher outro exercício.
            */

            case 10:
                console.log("=== Exercício 10 ===");
                rl.question("Digite os números separados por espaço: ", (entrada: string) => {
                const numeros: number[] = entrada.split(" ").map(num => Number(num.trim()));

                console.log("Array original:");
                console.log(numeros);

                numeros.sort((a, b) => a - b);

                console.log("Array em ordem crescente:");
                console.log(numeros);

            voltarAoMenu();
                });
            break;
            /*
            Explicação:
            O programa lê uma série de números separados por espaço, converte-os para um array de números e exibe o array original. Em seguida, ele ordena o array em ordem crescente usando o método sort() com uma função de comparação personalizada e exibe o array ordenado. Após isso, o programa oferece a opção de voltar ao menu para escolher outro exercício.
            */

            case 11:
                console.log("=== Exercício 11 ===");
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
            /*
            Explicação:
            O programa implementa uma classe Pessoa com atributos privados para nome e idade, e um método para exibir as informações. Ele solicita ao usuário o nome e a idade, cria uma instância da classe Pessoa e exibe as informações. Após isso, o programa oferece a opção de voltar ao menu para escolher outro exercício.
            */

            case 12:
                console.log("=== Exercício 12 ===");
                class Pessoa1 {
                    protected nome: string;
                    protected idade: number;
                    constructor(nome: string, idade: number) {
                        this.nome = nome;
                        this.idade = idade;
                    }
                    exibirInfo(): void {
                        console.log(`Nome: ${this.nome}`);
                        console.log(`Idade: ${this.idade} anos`);
                    }
                }

                class Aluno extends Pessoa1 {
                    private matricula: string;
                    constructor(nome: string, idade: number, matricula: string) {
                        super(nome, idade);
                        this.matricula = matricula;
                    }
                    exibirInfo(): void {
                        super.exibirInfo();
                        console.log(`Matrícula: ${this.matricula}`);
                    }
                }

                rl.question("Digite o nome do aluno: ", (nome: string) => {
                    rl.question("Digite a idade do aluno: ", (idade: string) => {
                        rl.question("Digite a matrícula do aluno: ", (matricula: string) => {
                            const aluno = new Aluno(nome, Number(idade), matricula);
                            console.log("\nInformações do Aluno:");
                            aluno.exibirInfo();
                            voltarAoMenu();
                        });
                    });
                });
            break;
            /*
            Explicação:
            O programa define uma classe Pessoa1 com atributos protegidos para nome e idade, e um método para exibir essas informações. A classe Aluno herda de Pessoa1 e adiciona um atributo matricula, além de sobrescrever o método exibirInfo() para incluir a matrícula. O programa solicita ao usuário o nome, idade e matrícula do aluno, cria uma instância da classe Aluno e exibe as informações. Após isso, o programa oferece a opção de voltar ao menu para escolher outro exercício.
            */

            case 13:
                console.log("=== Exercício 13 ===");
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
             /*
            Explicação:
            O programa implementa uma classe Carro com métodos para ligar, desligar, acelerar e frear. Ele solicita ao usuário a marca, modelo e incremento de velocidade do carro, cria uma instância da classe Carro e apresenta um menu para interagir com o carro. O usuário pode ligar, acelerar, frear ou desligar o carro, e o painel exibe as informações atuais do veículo. Após isso, o programa oferece a opção de voltar ao menu para escolher outro exercício.
            */

            case 14:
                console.log("=== Exercício 14 ===");
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
            /*
            Explicação:
            O programa solicita ao usuário um número inteiro e exibe a tabuada desse número de 1 a 10. Ele valida a entrada para garantir que seja um número inteiro válido. Após exibir a tabuada, o programa oferece a opção de voltar ao menu para escolher outro exercício.
            */

            case 15:
                console.log("=== Exercício 15 ===");
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
            /*
            Explicação:
            O programa calcula o Índice de Massa Corporal (IMC) com base no peso e altura fornecidos pelo usuário. Ele valida as entradas para garantir que sejam números positivos. O IMC é calculado usando a fórmula: IMC = peso / (altura * altura), onde a altura é convertida de centímetros para metros. O programa classifica o resultado do IMC em categorias como "ABAIXO DO PESO", "NORMAL", "SOBREPESO" e "OBESIDADE". Após exibir o resultado, o programa oferece a opção de voltar ao menu para escolher outro exercício.
            */

            case 16:
                console.log("=== Exercício 16 ===");
                rl.question("Digite a senha para validação: ", (senha: string) => { 
                    const temMaiuscula = /[A-Z]/.test(senha);
                    const temMinuscula = /[a-z]/.test(senha);
                    const temNumero = /[0-9]/.test(senha);
                    const temOitoCaracteres = senha.length >= 8;
                    if (temMaiuscula && temMinuscula && temNumero && temOitoCaracteres) {
                        console.log("Senha válida!");
                    } else {
                        console.log("Senha inválida! A senha deve conter:");
                        if (!temOitoCaracteres) console.log("- Pelo menos 8 caracteres");
                        if (!temMaiuscula) console.log("- Pelo menos uma letra maiúscula");
                        if (!temMinuscula) console.log("- Pelo menos uma letra minúscula");
                        if (!temNumero) console.log("- Pelo menos um número");
                    } 
                    voltarAoMenu();  
                });
            break;
            /*
            Explicação:
            O programa valida uma senha com base em critérios específicos: deve conter pelo menos 8 caracteres, uma letra maiúscula, uma letra minúscula e um número. Ele utiliza expressões regulares para verificar a presença de cada tipo de caractere e a extensão da senha. O resultado da validação é exibido no console, indicando se a senha é válida ou quais critérios não foram atendidos. Após isso, o programa oferece a opção de voltar ao menu para escolher outro exercício.
            */

            case 17:
                console.log("=== Exercício 17 ===");
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
            /*
            Explicação:
            O programa implementa um jogo de adivinhação onde o computador sorteia um número entre 1 e 100, e o usuário tenta adivinhá-lo. O programa fornece dicas indicando se o chute do usuário é maior ou menor que o número secreto, e conta o número de tentativas feitas. Quando o usuário acerta o número, o programa exibe uma mensagem de parabéns e informa quantas tentativas foram necessárias. Após isso, o programa oferece a opção de voltar ao menu para escolher outro exercício.
            */

            case 18:
                console.log("=== Exercício 18 ===");
                rl.question("Digite uma string: ", (entrada: string) => {
                    const palavras = entrada.trim().split(/\s+/);
                    const quantidadePalavras = palavras.filter(p => p.length > 0).length;
                    console.log(`A string "${entrada}" contém ${quantidadePalavras} palavra(s).`);
                    voltarAoMenu();
                });
            break;
            /*
            Explicação:
            O programa conta o número de palavras em uma string fornecida pelo usuário. Ele utiliza o método split() para dividir a string em um array de palavras, usando um espaço como delimitador. Em seguida, ele filtra o array para contar apenas as palavras que têm comprimento maior que zero, garantindo que espaços extras não sejam contados como palavras. O resultado é exibido no console, e o programa oferece a opção de voltar ao menu para escolher outro exercício.
            */

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
