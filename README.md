# 📘 Prática de Desenvolvimento com TypeScript

<div align="center">

![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-LTS-339933?style=for-the-badge&logo=node.js&logoColor=white)


</div>

---

## 📋 Informações Acadêmicas

| Campo        | Informação                        |
|--------------|-----------------------------------|
| **Curso**    | Engenharia de Software            |
| **Disciplina** | Programação Front-End           |
| **Professor** | José Carlos Flores               |
| **Turma**    | ESOFT3B                           |
| **Entrega**  | 28 de Maio de 2026                |
| **Apresentação** | 29 de Maio de 2026            |

---

## 👥 Integrantes do Grupo

| RA             | Nome                                   |
|----------------|----------------------------------------|
| `25001118-2`   | Emanuel Gomes de Almeida               |
| `25033056-2`   | Gabriel Michels Cubas                  |
| `25164719-2`   | Rafael Maia                            |
| `25291090-2`   | João Lucas Veiga de Carvalho           |
| `25363242-2`   | Euclides Benedito Modesto Coelho Neto  |
| `25357453-2`   | Leonardo De Jesus Sabino Flugel        |

---

## 📌 Descrição Geral

Este projeto consiste no desenvolvimento de uma aplicação de console em **TypeScript puro**, contendo **18 exercícios práticos** organizados em um menu interativo. O programa permite ao usuário selecionar qualquer exercício, fornecer os dados de entrada solicitados e visualizar o resultado diretamente no terminal, retornando ao menu principal ao pressionar Enter.

O trabalho foi desenvolvido em grupo como parte da avaliação do 2º Bimestre da disciplina de Programação Front-End, com o objetivo de consolidar os conhecimentos adquiridos sobre TypeScript, boas práticas de programação, tipagem estática e orientação a objetos.

---

## 🎯 Objetivo da Atividade

Desenvolver algoritmos para solucionar uma lista de exercícios utilizando TypeScript, demonstrando a capacidade de aplicar as seguintes práticas:

- Tipagem estática e inferência de tipos do TypeScript
- Organização de projetos com `tsconfig.json` e separação `src/dist`
- Programação orientada a objetos (classes, herança, interfaces)
- Estruturas de controle, laços e manipulação de arrays
- Boas práticas de código: comentários, nomenclatura e modularização

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Finalidade |
|---|---|---|
| [TypeScript](https://www.typescriptlang.org/) | `^5.5.0` | Linguagem principal do projeto |
| [Node.js](https://nodejs.org/) | LTS (18+) | Ambiente de execução |
| [ts-node](https://typestrong.org/ts-node/) | `^10.9.2` | Execução direta de arquivos `.ts` |
| [@types/node](https://www.npmjs.com/package/@types/node) | `^22.0.0` | Tipagens do Node.js para TypeScript |

---

## ✅ Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado em sua máquina:

- **Node.js** (versão LTS 18 ou superior) → [https://nodejs.org](https://nodejs.org)
- **NPM** (já incluso na instalação do Node.js)
- **Visual Studio Code** (recomendado) → [https://code.visualstudio.com](https://code.visualstudio.com)

Para verificar se estão corretamente instalados, execute no terminal:

```bash
node -v
npm -v
```

---

## 📁 Estrutura do Projeto

```
ESOFT3B-PFE-Avalia-o-2o-Bimestre-Trabalho-Pr-tico-1/
├── src/                        ← Arquivos-fonte TypeScript (.ts)
│   ├── Menu.ts                 ← Menu principal e exercicios
├── dist/                       ← Arquivos JavaScript compilados (gerado pelo tsc)
├── node_modules/               ← Dependências instaladas (gerado pelo npm install)
├── package.json                ← Metadados e scripts do projeto
├── package-lock.json           ← Lockfile das dependências
├── tsconfig.json               ← Configurações do compilador TypeScript
└── README.md                   ← Este arquivo
```

> **Nota:** as pastas `dist/` e `node_modules/` são geradas automaticamente e **não devem ser versionadas** no repositório.

---

## ⚙️ Configuração do Ambiente TypeScript

O arquivo `tsconfig.json` foi configurado conforme as diretrizes da disciplina:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "Node16",
    "moduleResolution": "Node16",
    "rootDir": "./src",
    "outDir": "./dist",
    "types": ["node"],
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "sourceMap": true
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules", "dist"]
}
```

| Opção | Descrição |
|---|---|
| `target: ES2022` | Compila para JavaScript moderno |
| `rootDir: ./src` | Define a pasta de entrada dos arquivos `.ts` |
| `outDir: ./dist` | Define a pasta de saída dos arquivos `.js` compilados |
| `strict: true` | Habilita todas as verificações rígidas de tipo |
| `sourceMap: true` | Gera mapas de código para depuração no VS Code |
| `module: Node16` | Compatível com o sistema de módulos do Node.js 16+ |

---

## 🚀 Instalação e Execução

### 1. Clonar o repositório

```bash
git clone https://github.com/JoaoLucasVeiga/ESOFT3B-PFE-Avalia-o-2o-Bimestre-Trabalho-Pr-tico-1
```

### 2. Instalar as dependências

```bash
npm install
```

### 3. Executar o projeto

**Opção A — Execução direta (recomendado para desenvolvimento):**

```bash
npx ts-node src/Menu.ts
```

**Opção B — Compilar e executar:**

```bash
# Compila os arquivos .ts para .js dentro de /dist
npx tsc

# Executa o programa compilado
node dist/index.js
```

---

## 📜 Scripts Disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Executa `src/index.ts` diretamente via `ts-node` |
| `npm run build` | Compila todo o projeto com `tsc` |
| `npm run start` | Executa `dist/index.js` com Node.js |
| `npm run watch` | Modo observação: recompila ao detectar alterações |
| `npx tsc --noEmit` | Verifica erros de tipo sem gerar arquivos |

---

## 📚 Exercícios Implementados

O programa apresenta um menu interativo com 18 opções. Abaixo está a descrição de cada exercício:

| Nº | Título | Descrição |
|---|---|---|
| 01 | Soma de dois números | Recebe dois inteiros e exibe a soma |
| 02 | Par ou ímpar | Lê um inteiro e informa se é par ou ímpar |
| 03 | Média de três notas | Calcula a média aritmética de três notas |
| 04 | Celsius para Fahrenheit | Converte temperatura usando `F = (C × 9/5) + 32` |
| 05 | Números pares de 1 a 20 | Exibe todos os pares no intervalo via laço |
| 06 | Array de 5 números | Lê 5 números, armazena em array e os exibe |
| 07 | Maior número do array | Encontra o maior valor em um array de inteiros |
| 08 | Contar vogais | Conta o número de vogais em uma string |
| 09 | Calculadora simples | Realiza as quatro operações básicas (+, -, *, /) |
| 10 | Ordenar array | Ordena um array de números em ordem crescente |
| 11 | Classe Pessoa | Define a classe `Pessoa` com atributos e métodos |
| 12 | Classe Aluno | Herda de `Pessoa` e adiciona o atributo `matricula` |
| 13 | Interface Veiculo | Define `interface Veiculo` e implementa em `Carro` |
| 14 | Tabuada | Exibe a tabuada de 1 a 10 de um número fornecido |
| 15 | Calculadora de IMC | Calcula IMC e exibe a classificação correspondente |
| 16 | Validar senha | Verifica critérios de segurança em uma senha |
| 17 | Jogo de adivinhação | Sorteia número entre 1–100 com dicas de maior/menor |
| 18 | Contar palavras | Conta as palavras em uma string fornecida |

### Fluxo de uso do menu

```
=== MENU DE EXERCÍCIOS ===
 1  - Soma de dois números
 ...
 0  - Sair

Escolha uma opção (0-18): 1

=== EXERCÍCIO 1 ===
Digite o primeiro número para soma: 5
Digite o segundo número para soma: 3

Resultado: 5 + 3 = 8

Pressione Enter para continuar...
```

---

## 🔍 Depuração no VS Code

Com `sourceMap: true` habilitado no `tsconfig.json`, é possível depurar diretamente nos arquivos `.ts`. Para configurar:

1. Acesse **Run and Debug** (`Ctrl + Shift + D`)
2. Clique em **"create a launch.json file"** e selecione **Node.js**
3. Substitua o conteúdo por:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Executar Programa TypeScript",
      "skipFiles": ["<node_internals>/**"],
      "program": "${workspaceFolder}/src/index.ts",
      "preLaunchTask": "tsc: build - tsconfig.json",
      "outFiles": ["${workspaceFolder}/dist/**/*.js"]
    }
  ]
}
```

4. Adicione breakpoints clicando à esquerda do número de linha e pressione `F5`

---

## ⚠️ Observações Relevantes

- A pasta `dist/` é gerada automaticamente pelo compilador e **não deve ser editada manualmente**
- Caso ocorra erro de permissão ao instalar pacotes globais, utilize `sudo npm install -g typescript` no Linux/macOS ou execute o terminal como administrador no Windows

---

## 🏫 Instruções para Correção e Apresentação

1. **Clonar o repositório** e executar `npm install` na raiz do projeto
2. **Iniciar o programa** com `npx ts-node src/Menu.ts`
3. **Selecionar o exercício** desejado digitando o número correspondente no menu
4. **Fornecer os dados** solicitados e verificar o resultado exibido no console
5. **Pressionar Enter** para retornar ao menu e testar outro exercício
6. **Digitar `0`** para encerrar o programa

> Todos os exercícios foram testados e validados antes da entrega. Em caso de dúvidas durante a avaliação, os integrantes estarão disponíveis para esclarecimentos na apresentação do dia **29/05/2026**.

---

## 📄 Referências

- TypeScript Documentation. Disponível em: [https://www.typescriptlang.org/docs](https://www.typescriptlang.org/docs)
- Visual Studio Code — TypeScript Tutorial. Disponível em: [https://code.visualstudio.com/docs/typescript/typescript-tutorial](https://code.visualstudio.com/docs/typescript/typescript-tutorial)
- Node.js Documentation. Disponível em: [https://nodejs.org/en/docs](https://nodejs.org/en/docs)

---

<div align="center">

**ESOFT3B — Programação Front-End · Engenharia de Software · 2026**

</div>
