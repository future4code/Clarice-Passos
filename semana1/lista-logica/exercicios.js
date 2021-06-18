// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

/* // EXERCÍCIO 0A
function soma(num1, num2) {
  
  return num1 + num2
}
soma(1,2)


// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}
imprimeMensagem ("Olá, mundo") */

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01

function calculaAreaRetangulo() {
const altura = Number(prompt ("Altura"))
const largura = Number(prompt ("Largura"))
const calculaAreaRetangulo = altura * largura
console.log (calculaAreaRetangulo)
}
calculaAreaRetangulo (3,5)

// EXERCÍCIO 02
function imprimeIdade() {
const anoQueEstamos = Number(prompt("Em que ano nós estamos?"))
const anoQueNasceu = Number(prompt ("Em que ano vc nasceu?"))
const imprimeIdade = anoQueEstamos - anoQueNasceu
console.log (imprimeIdade)
}
imprimeIdade (2020,1990)

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const calculaIMC = peso / (altura * altura)
  return calculaIMC
}

calculaIMC (85, 1,8)

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
const nome = prompt ("Qual é o seu nome?")
const idade = Number (prompt("Qual a sua idade?"))
const email = prompt ("Qual o seu email?")
const imprimeInformacoesUsuario = `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`
console.log (imprimeInformacoesUsuario) 
}

console.log ("Alice", 28, "alice@gmail.com") 


/* // EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt ("Qual a sua cor favorita?")
  const cor2 = prompt ("Qual a sua segunda cor favorita?")
  const cor3 = prompt ("Qual a sua terceira cor favorita?")
  const imprimeTresCoresFavoritas = [cor1, cor2, cor3]
  console.log (imprimeTresCoresFavoritas)
}
imprimeTresCoresFavoritas (azul, amarelo, vermelho) */


// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  const retornaStringEmMaiuscula = string.toUpperCase()
return string.toUpperCase()
}

retornaStringEmMaiuscula (oi)

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
const calculaIngressosEspetaculo = (custo / valorIngresso)
return (custo / valorIngresso)

}
calculaIngressosEspetaculo (3000,100)

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1,string2) {
  const tamanhoString1 = string1.length
  const tamanhoString2 = string2.length
  const checaStringsMesmoTamanho = tamanhoString1 === tamanhoString2
  return (checaStringsMesmoTamanho)
}

checaStringsMesmoTamanho (ola,abc)


// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
const retornaPrimeiroElemento = array[0]
return (retornaPrimeiroElemento)
}
retornaPrimeiroElemento [1, 2, 3]

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
retornaUltimoElemento = array [array.length-1]
return (retornaUltimoElemento)
}
retornaUltimoElemento [1, 2, 3, 4, 5]

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const primeiroElemento = array[0]
  const ultimoElemento = array[array.length-1]
  array[0] = array [array.length-1]
  array[array.length-1] = primeiroElemento
  return array

}

trocaPrimeiroEUltimo [1, 2, 3, 4, 5]


// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1,string2) {
  const checaIgualdadeDesconsiderandoCase = string1==string2
  return checaIgualdadeDesconsiderandoCase
}

checaIgualdadeDesconsiderandoCase ("Ola", "olA")

/* / EXERCÍCIO 13
function checaRenovacaoRG() {
const anoAtual = Number(prompt ("Em que ano estamos?"))
const anoNascimento = Number(prompt ("Em que ano vc nasceu?"))
const anoCarteiraIdentidade = Number(prompt ("Em que ano sua carteira de identidade foi emitida?"))
const idade = anoAtual - anoNascimento
const RG = anotAtual - anoCarteiraIdentidade
const condicoes1 = idade < 20 && RG > 5
const condicoes2 =  20 < idade && idade < 50 && RG > 10
const condicoes3 =  50> idade && RG > 15

console.log ()
} */

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}