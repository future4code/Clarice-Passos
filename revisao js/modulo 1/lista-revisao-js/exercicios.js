// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   const size = array.length
   return size
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
const reverse = array.reverse()
return reverse
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  const ordered = array.sort(function(a,b){
     return a-b
  })
  return ordered
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
   const arrayVazio =[]
   for (let i = 0; i < array.length; i ++) {
     if (array[i] % 2 === 0){
       arrayVazio.push(array[i]) }
   }
     return arrayVazio
   }


// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
   const arrayVazio =[]
   for (let i = 0; i < array.length; i ++) {
     if (array[i] % 2 === 0){
       arrayVazio.push(array[i] * array[i]) }
   }
     return arrayVazio
   }

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
   let maiorNumero = 0
   
   for (let i = 0; i < array.length; i ++) {
      const numeroAtual = array[i]
      if(numeroAtual > maiorNumero){
        maiorNumero = numeroAtual
    }
  }
  return maiorNumero
}


// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}