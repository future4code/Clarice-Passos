//function minhaFuncao(variavel) {
	//return variavel * 5
//}

//console.log(minhaFuncao(2))
//console.log(minhaFuncao(10))

//a) O que vai ser impresso no console?
//10
//50

//b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função 
//`minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
//Nada

//let textoDoUsuario = prompt("Insira um texto");

//const outraFuncao = function(texto) {
	//return texto.toLowerCase().includes("cenoura")
//}

//const resposta = outraFuncao(`Eu gosto de cenoura`)
//const resposta = outraFuncao(`CENOURA é bom pra vista`)
//const resposta = outraFuncao (`Cenouras crescem na terra`)

//console.log(resposta)

//a. Explique o que essa função faz e qual é sua utilidade
//Coloca em caixa baixa e vê se inclui cenoura

//b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
//i.   `Eu gosto de cenoura`
//  eu gosto de cenoura True
//ii.  `CENOURA é bom pra vista`
//cenoura é bom pra vista False
//iii. `Cenouras crescem na terra`
//cenoura crescem na terra False

//Exercícios de escrita de código

//1. Escreva as funções explicadas abaixo:

//a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas 
//informações sobre você, como: 

//"Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."

//Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. 
//Lembrando que a função não possui entradas, apenas imprime essa mensagem.

//function minhaFuncao() {
	//console.log ("Meu nome é Clarice, tenho 33 anos, moro em Porto Alegre e sou estudante") 
//}

//minhaFuncao()

//b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa:
 //o nome (`string`), a idade (`number`), a cidade (`string`) e uma profissão (`string`). 
 //Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:

//Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].

//- Exemplo

//Para a entrada:  `"Laís"`, `23`, `"São Paulo"` e `"instrutora"`, deve retornar:

//`"Eu sou Laís, tenho 23 anos, moro em São Paulo e sou instrutora."`

/* function minhaFuncao(nome, idade, cidade, profissão){
console.log (`Meu nome é ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissão}`)
return
}

minhaFuncao("Clarice", 33,"Porto Alegre", "jornalista") */


//2. Escreva as funções explicadas abaixo:
//a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das
//duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.

//function somaDoisNumeros (num1, num2){
    //const soma = (num1 + num2)
    //console.log (soma)
    //return
//}
//somaDoisNumeros (3,4)


//b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número
//é **maior ou igual** ao segundo.

/* function numeroMaior (num1, num2){
const comparacao = (num1 >= num2)
console.log (comparacao)
return
}
numeroMaior (10,5) */

//c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

/* function numeroPar(num1){
    const restoDaDivisao = (num1 % 2) === 0
    console.log (restoDaDivisao)
    return
    }

numeroPar (50)
 */


//d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem,
//juntamente com uma versão dela em letras maiúsculas.

function mensagem(texto){
   const meuTexto = texto.toUpperCase()
   const lenght = texto. length
   console.log (meuTexto)
   console.log (lenght)
    return
}
mensagem ("Estou de saco cheio. Quero dormir!")

/* 

//3. Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). 
Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores 
inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:

    /*     ```
        Números inseridos: 30 e 3
        Soma: 33
        Diferença: 27
        Multiplicação: 90
        Divisão: 10
        ``` */