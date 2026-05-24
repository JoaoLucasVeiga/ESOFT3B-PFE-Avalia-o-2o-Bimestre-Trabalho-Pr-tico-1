/**************************
Curso: Engenharia de Software
Disciplina: Programação Front-End
Professor: José Carlos Flores
Turma: ESOFT3B

Componentes: 
             25001118-2 - Emanuel Gomes de Almeida 
             25033056-2 - Gabriel Michels Cubas
             25164719-2 - Rafael Maia
             25291090-2 - João Lucas Veiga de Carvalho
             25363242-2 - Euclides Benedito Modesto Coelho Neto
             25357453-2 - Leonardo De Jesus Sabino Flugel

Data: 19 de Maio de 2026

Descritivo:
Programa que valida uma senha conforme os critérios:
- mínimo de 8 caracteres
- pelo menos uma letra maiúscula
- pelo menos uma letra minúscula
- pelo menos um número
***************************/

let senha: string = "Teste123";

console.log("==================================");
console.log("      VALIDADOR DE SENHAS");
console.log("==================================");

// Verificações
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