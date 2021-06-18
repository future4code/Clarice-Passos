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


// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt ("Qual a sua cor favorita?")
  const cor2 = prompt ("Qual a sua segunda cor favorita?")
  const cor3 = prompt ("Qual a sua terceira cor favorita?")
  const imprimeTresCoresFavoritas = [cor1, cor2, cor3]
  console.log (imprimeTresCoresFavoritas)
}
imprimeTresCoresFavoritas (azul, amarelo, vermelho)


// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}