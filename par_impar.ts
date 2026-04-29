import * as readline from 'readline-sync';

// Solicita um número ao usuário
const numero: number = readline.questionInt("Digite um numero inteiro: ");

// Lógica para verificar se o número é par ou ímpar
if (numero % 2 === 0) {
    console.log(`O numero ${numero} e PAR.`);
} else {
    console.log(`O numero ${numero} e IMPAR.`);
}
