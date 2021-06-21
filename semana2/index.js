//- **Exercícios de interpretação de código**

//1.  Leia o código abaixo
//    const filme = {
//        nome: "Auto da Compadecida", 
//        ano: 2000, 
//        elenco: [
//            "Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
//            "Virginia Cavendish"
//            ], 
//        transmissoesHoje: [
//            {canal: "Telecine", horario: "21h"}, 
//           {canal: "Canal Brasil", horario: "19h"}, 
//            {canal: "Globo", horario: "14h"}
//            ]
//    }

//    console.log(filme.elenco[0])
//    console.log(filme.elenco[filme.elenco.length - 1])
//    console.log(filme.transmissoesHoje[2])
    

    //a) O que vai ser impresso no console?
    //Matheus Nachtergaele
    //Virginia Cavendish
   // {canal: "Globo", horario: "14h"}


//2. Leia o código abaixo

/*  let cachorro = {
    nome: "Juca", 
    idade: 3, 
    raca: "SRD"
 }

   let gato = {...cachorro, nome: "Juba"}
   let tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

    console.log(cachorro)
    console.log(gato)
    console.log(tartaruga) */
 

//a) O que vai ser impresso no console?
    //Cachorro nome: juca, idade: 3, raca: SDR
    //Gato nome: Juba, idade: 3, raca: SDR
    //Tartaruga nome:Jubo, idade:3, raca: SDR


//b) Copia sem perder os dados originais

//3. Leia o código abaixo
/* 
function minhaFuncao(objeto, propriedade) {
return objeto[propriedade]
}

 const pessoa = {
 nome: "Caio", 
 idade: 23, 
backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura")) */

//a) O que vai ser impresso no console?
// False
// Undefined

// b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
// Não foi criado esse valor

/* - **Exercícios de escrita de código**
1. Resolva os passos a seguir: 

a) Crie um objeto. Ele deve conter duas propriedades: 
nome (string) e apelidos (um array que sempre terá exatamente **três apelidos**).
Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo**:** 

// Exemplo de entrada
const pessoa = {
nome: "Amanda", 
apelidos: ["Amandinha", "Mandinha", "Mandi"]
}
Exemplo de saída
"Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi" */


/* const ClaricePassos = {
    nome: "Clarice",
    apelidos: ["Cla", "Clari", "Crocs"]
}

/* console.log (`Eu sou ${ClaricePassos.nome}, mas pode me chamar de: ${ClaricePassos.apelidos[0]},
${ClaricePassos.apelidos[1]} ou ${ClaricePassos.apelidos[2]}`)
 */

/* b) Agora, usando **o operador spread**, crie um novo objeto mantendo o valor da propriedade nome, 
mas com uma nova lista de três apelidos. 
Depois, chame a função feita no item anterior passando como argumento o novo objeto */

/* const NovosApelidos = {...ClaricePassos, apelidos: ["Maria", "Joaquina", "Fernanda"]}
console.log (NovosApelidos)

console.log (ClaricePassos.NovosApelidos) */



/* 2. Resolva os passos a seguir: 

a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão.  */
/* const pessoa1 = {
    nome: "Clarice Passos",
    Idade: 33,
    Profissão: "Jornalista"
}

const minhaFuncao = {
   array: [pessoa1.nome, pessoa1.nome.length, pessoa1.Idade, pessoa1.Profissão, pessoa1.Profissão.length]    
    }

console.log (minhaFuncao)

/*const pessoa2 = {
    nome: "Gustavo Vettorato",
    Idade: 34,
    Profissão: "Designer"
}

const minhaFuncao = {
    array: [pessoa2.nome, pessoa2.nome.length, pessoa2.Idade, pessoa2.Profissão, pessoa2.Profissão.length]    
}
console.log (minhaFuncao) */


/*  b) Escreva uma função que receba esses objetos e retorne um array com as seguintes 
1. O valor de `nome`
2. O numero de caracteres do valor `nome`
3. O valor de `idade`
4. O valor de `profissão`
5. O numero de caracteres do valor `profissão` */
        
/* 3. Resolva os passos a 
a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`


b) Crie três novos objetos que representem frutas de um sacolão. 
Eles devem ter as seguintes nome (`string`) e disponibilidade (`boolean` - devem começar como `true`) */

/* c) Crie uma função que **receba** um objeto fruta por **parâmetro** e 
coloque-a dentro do array de `carrinho`. Invoque essa função passando os três objetos criados. 


 d) Imprima a variável `carrinho` e garanta que ela agora seja um **array preenchido com três objetos.**  */

 let carrinho = []

let frutasDoSacolao = [
    { nome: "Mamão", disponível: "true" },
    { nome: "Melão", disponível: "true" },
    { nome: "Abacate", disponível: "true" },

]

carrinho.push = [frutasDoSacolao[0], frutasDoSacolao[1], frutasDoSacolao[2]]

console.log ("Este é um carrinho de compras", carrinho) 

let disponivel = (frutasDoSacolao[0].disponivel)

console.log ("Tem mamão no sacolão", (!frutasDoSacolao[0].disponível))


//Desafios
//1

/* const novoUsuario = {
nome: prompt("Qual o seu nome?"),
idade: Number(prompt("Qual a sua idade?")),
profissão: prompt("Qual a sua profissão?")
}
console.log (novoUsuario)
novoUsuario.typeof */

/* const filmes = [
{ nome: "Titanic", data: 1996 },
{ nome: "Nomadland", data: 2021 }

]

console.log ("O primeiro filme foi lançado antes do segundo?", filmes[0].data < filmes[1].data) */