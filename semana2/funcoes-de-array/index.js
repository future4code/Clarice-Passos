//1.  Leia o código abaixo
/* const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array)
  })

0 const usuarios  nome: Amanda Rangel, apelido: Mandi
 */

/*2. const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayB = usuarios.map((item, index, array) => {
     return item.nome
  })
  
  console.log(novoArrayB) */

  // 0 Amanda Rangel 1 Laís Petra 2 Letícia Chijo]

  //2.
/*   const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayC = usuarios.filter((item, index, array) => {
   return item.apelido !== "Chijo"
})

console.log(novoArrayC)

{ nome: "Amanda Rangel", apelido: "Mandi" },
{ nome: "Laís Petra", apelido: "Laura" },
 */

// 1. 

/* const pets = [
       { nome: "Lupin", raca: "Salsicha"},
       { nome: "Polly", raca: "Lhasa Apso"},
       { nome: "Madame", raca: "Poodle"},
       { nome: "Quentinho", raca: "Salsicha"},
       { nome: "Fluffy", raca: "Poodle"},
       { nome: "Caramelo", raca: "Vira-lata"},
    ]
const nomeDosDogs = pets.map((nomeDog) => {
    return nomeDog.nome
})

console.log (nomeDosDogs)

// item B
const apenasCachorroSalsicha = pets.filter((dog) => {
    return dog.raca === "Salsicha"
   })
console.log (apenasCachorroSalsicha)

// item C

//c) 
const apenasCachorroPoodle = pets.filter((dog) => {
    return dog.raca === "Poodle"
}).map((item) => {
    return "Você ganhou um cupom de desconto de 10% para tosar o/a" + item.nome
})
console.log (apenasCachorroPoodle) */

//2.
    /* const produtos = [
       { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
       { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
       { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
       { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
       { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
       { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
       { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
       { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
       { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
       { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
    ] */
//a) 
/*  const nomeProdutos = produtos.map((item) => {
 return item.nome
 })
 console.log (nomeProdutos) */

//b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, 
//aplicando 5% de desconto em todos eles


/* const novoArray = produtos.map((item) => {
let nomes = item.nome
let desconto = item.preco * 0.95 
return {nome: nomes, preco: desconto}
})
 console.log (novoArray) */
 
// c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
/* const arrayBebidas = produtos.filter((item) => {
return apenasBebidas = item.categoria === "Bebidas"
})

console.log(arrayBebidas) */

//    d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
/* const arrayBebidas = produtos.filter((item) => {
    let apenasBebidas = item.nome.includes("Ypê")
    return apenasBebidas

    })
    console.log(arrayBebidas) */


//e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]".
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

const arrayBebidas = produtos.filter((item) => {
    let apenasBebidas = item.nome.includes("Ypê")
    return apenasBebidas
    }).map((item) => {
    return `Nome produto ${item.nome} e preço R$ ${item.preco}`
})
console.log (arrayBebidas)
