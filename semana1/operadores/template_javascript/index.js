/* Exercícios de interpretação de código

EXERCÍCIO 1

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2 
console.log("a. ", resultado) false

resultado = bool1 && bool2 && bool3 //false
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2)  true
console.log("c. ", resultado)

console.log("d. ", typeof resultado) // boleano */

/*EXERCÍCIO 2
let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)

O prompt retorna uma string é não um number. deve utilizar number antes de prompt */

/* EXERCÍCIO 3
let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma) */

//- **Exercícios de escrita de código**
/* 1. Faça um programa que:

a) Pergunte a idade do usuário

b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga

c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", 
seguido pela resposta (`true` ou `false`)

d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)*/


/* let idade = Number(prompt("Qual a sua idade?"))

let idadeAmigo = Number(prompt("Qual a idade do seu melhor amigo?"))

console.log(idade > idadeAmigo, "Sua idade é maior do que a do seu amigo?")

console.log(idade - idadeAmigo, "Qual a diferença de idade entre você e seu amigo?") */

//2. Faça um programa que:
//a) Peça ao usuário que insira um número **par**

//b) Imprima na console **o resto da divisão** desse número por 2.

//c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.

//d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código

//let par = Number(prompt("Coloque um número par"))

//console.log (par % 2)

//par = o resto é sempre 0
//ímpar = o resto =/ 2

//3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 
//a) A idade do usuário em meses

//let idadeUsuario = Number(prompt ("Qual a sua idade?"))

///console.log ("Idade em meses",idadeUsuario * 12)


//b) A idade do usuário em dias
//console.log ("Idade em dias",idadeUsuario * 365)

//c) A idade do usuário em horas
//console.log ("Idade em horas",idadeUsuario * 365 * 24)

//4. Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens:
let numero1 = Number(prompt ("Coloque um número"))

let numero2 = Number(prompt ("Coloque outro número"))

//O primeiro numero é maior que segundo? true
console.log ("O primeiro numero é maior que o segundo?", numero1 > numero2)

//  O primeiro numero é igual ao segundo? false
console.log ("O primeiro numero é igual ao segundo?", numero1 === numero2)

//  O primeiro numero é divisível pelo segundo? true
console.log ("O primeiro numero é divisível pelo segundo?", numero1 % numero2 === 0)

 //   O segundo numero é divisível pelo primeiro? true
 console.log ("O segundo numero é divisível pelo primeiro?", numero2 % numero1 === 0)
 

