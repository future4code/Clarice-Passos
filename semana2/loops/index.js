//**Exercícios de interpretação de código**
//1. O que o código abaixo está fazendo? Qual o resultado impresso no console?
   /*      let valor = 0
        for(let i = 0; i < 5; i++) {
          valor += i
        }
        console.log(valor)
        
        10 */

// 2. Leia o código abaixo:

/*         const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
        for (let numero of lista) {
          if (numero > 18) {
        		console.log(numero)
        	}
        } */
        

/* a) O que vai ser impresso no console?

19
21
23
25
27
28


b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? 
Se sim, o que poderia ser usado para fazer isso?
sim

lista[]

3. Qual seria o resultado impresso no console, se o usuário digitasse o número `4` ? */

/* const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
let linha = ""
for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
linha += "*"
}
console.log(linha)
quantidadeAtual++
}
*
**
***
**** */

// Exercícios de escrita de código**
//1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 

let quantosBichinhos = Number(prompt("Quantos bichinhos de estimação você tem?"))
const animais = []
if (quantosBichinhos === 0) {
    console.log("Que pena! Você pode adotar um pet!")
} 
else {
   	for( let i=0; i< quantosBichinhos; i++){
		const petsNomes = prompt('nome')
		animais.push(petsNomes)
}
console.log(animais)
}
