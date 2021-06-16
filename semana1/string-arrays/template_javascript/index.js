//Exercícios de interpretação de código**
//1.  Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.

/* let array
console.log('a. ', array)
undefined
 */

//array = null
//console.log('b. ', array)
//b null

//array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
//console.log('c. ', array.length)
// 11

//let i = 0
//console.log('d. ', array[i])
// 3

//array[i+1] = 19
//console.log('e. ', array)
// array not defined

//const valor = array[i+6]
//console.log**('f. ', valor)
//array not defined


//2. Leia o código abaixo com atenção 


//const frase = prompt("Digite uma frase")

//console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

//Qual será o valor impresso no console se a entrada do usuário for: `"Subi num ônibus em Marrocos"`? */

//SUBI NUM ÔNIBUS EM MiRROCOS
//27

//1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a
//seguinte mensagem:
//O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!
/* 
2. Faça um programa que contenha um array com 5 das suas comidas preferidas,
 armazenado em uma variável. Em seguida, siga os passos: */
/* const comidasFavoritas = ["xis", "pizza", "massa", "salada", "feijoada"]

a) Imprima no consoleo array completo
console.log(comidasFavoritas)

b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", 
seguida por cada uma das comidas, **uma embaixo da outra**.
console.log("Essas são minhas comidas favoritas:", comidasFavoritas)


c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. 
const comidaUsuario = prompt ("Qual a sua comida preferida?") 

Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no console a nova lista*/
//comidasFavoritas [1] = comidaUsuario
//console.log (comidasFavoritas)  */

//a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
listaDeTarefas = []

let tarefas1 = prompt ("Diga 1 tarefa que vocÊ precisa realizar?")
let tarefas2 = prompt ("Diga outra tarefa que vocÊ precisa realizar?")
let tarefas3 = prompt ("Diga mais uma tarefa que vocÊ precisa realizar?")

listaDeTarefas.push (tarefas1)
listaDeTarefas.push (tarefas2)
listaDeTarefas.push (tarefas3)

console.log("Lista de tarefas que precisa fazer no dia", listaDeTarefas)

//d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
let digiteIndice = Number(prompt ("Digite um número de 0 a dois"))

//e) Remova da lista o item de índice que o usuário escolheu.

listaDeTarefas.splice(digiteIndice,1)

//f) Imprima o array no console */
console.log (listaDeTarefas)