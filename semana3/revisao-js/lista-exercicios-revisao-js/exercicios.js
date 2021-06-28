/* // EXERCÍCIO 01
function inverteArray(array) {
  const arrayInvertido = []
  for (let i = array.length - 1; i >= 0; i--){
    arrayInvertido.push(array[i])
  }
  return arrayInvertido
}
console.log(inverteArray[0, 8, 23, 16, 10, 15, 41, 12, 13]) */


// EXERCÍCIO 02
/*  function retornaNumerosParesElevadosADois(array) {
  let arrayParesElevados = []
  for (let i = 0; i < array.length; i ++){
    if (array[i] % 2 === 0){
      const elevado2 = Math.pow(array[i], 2)
   arrayParesElevados.push(Math.pow(array[i], 2))}
    }
  return arrayParesElevados
}

console.log(retornaNumerosParesElevadosADois(1, 2, 3, 4, 5, 6)) */

// EXERCÍCIO 03

/* function retornaNumerosPares(array) {
const arrayVazio =[]
  for (let i = 0; i < array.length; i ++) {
    if (array[i] % 2 === 0){
      arrayVazio.push(array[i]) }
  }
    return arrayVazio
  }
console.log(retornaNumerosPares(1,2,3,4,5,6,7)) */


/*  // EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let maiorNumero = 0
  const tam = array.length

  for (let i = 0; i < array.length; i ++) {
      const numeroAtual = array[i]
      if(numeroAtual > maiorNumero){
        maiorNumero = numeroAtual
    }
  }
  return maiorNumero
}
console.log(retornaMaiorNumero(1,2,3,4,5,6)) */

/* 
// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  const tamanhoArray = array.length
  return tamanhoArray
}
console.log(retornaQuantidadeElementos(1,2,3,4,5,6,7))

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
 const respostas =[false, false, true, true, true]
 return respostas}

 console.log(retornaExpressoesBooleanas())

 const booleano1 = true
 const booleano2 = false
 const booleano3 = !booleano2 
 const booleano4 = !booleano3 

booleano1 && booleano2 && !booleano4 //F

(booleano1 && booleano2) || !booleano3 //V

(booleano2 || booleano3) && (booleano4 || booleano1) //V

!(booleano2 && booleano3) || !(booleano1 && booleano3)//F
V
!(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)//V */

// EXERCÍCIO 07
/* function retornaNNumerosPares(n) {
  const pares = []
  for (let i = 0; i < n*2; i ++) {
    if (array[i] % 2 === 0){
      pares.push(i)
}
  }
return pares
  } */

// EXERCÍCIO 08
/* function checaTriangulo(a, b, c) {
  const lado1 = a
  const lado2 = b
  const lado3 = c
  if (lado1 !== lado2 && lado2 !== lado3) {
    return 'Escaleno';
  } else if (lado1 === lado2 && lado1 === lado3) {
    return 'Equilátero';
  } else {
    return 'Isósceles'
  }
}
 */
// EXERCÍCIO 09
 //function comparaDoisNumeros(num1, num2) {
/*    let maiorNumero
   let menorNumero
   if (num1 > num2){
     maiorNumero = num1;
     menorNumero = num2;
   } else {
     menorNumero = num1;
     maiorNumero = num2; 
   }
   const maiorDivisivelPorMenor = maiorNumero % menorNumero === 0;
   const diferenca =  maiorNumero - menorNumero;
   return {
     maiorNumero: maiorNumero,
     maiorDivisivelPorMenor: maiorDivisivelPorMenor,
     diferenca: diferenca,
   };
   }
   console.log(comparaDoisNumeros(15,20)) */

/* //EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  copia = array.sort((a,b) => a - b)
  let novoArray = [copia[copia.length-2], copia[1]]
  return novoArray
} */

// EXERCÍCIO 11
function ordenaArray(array) {
const arrayOrdenado = array.sort((a,b) => a-b)
return arrayOrdenado
}

// EXERCÍCIO 12
/* function filmeFavorito() {

}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) { */