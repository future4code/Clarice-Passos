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
   const ordered = array.sort(function (a, b) {
      return a - b
   })
   return ordered
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
   const arrayVazio = []
   for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
         arrayVazio.push(array[i])
      }
   }
   return arrayVazio
}


// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
   const arrayVazio = []
   for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
         arrayVazio.push(array[i] * array[i])
      }
   }
   return arrayVazio
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
   let maiorNumero = 0

   for (let i = 0; i < array.length; i++) {
      const numeroAtual = array[i]
      if (numeroAtual > maiorNumero) {
         maiorNumero = numeroAtual
      }
   }
   return maiorNumero
}


// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

   const maiorNumero = Math.max(num1, num2)

   const menorNumero = Math.min(num1, num2)

   const diferenca = maiorNumero - menorNumero

   const maiorDivisivelPorMenor = maiorNumero % menorNumero === 0

   const objeto = { maiorNumero, maiorDivisivelPorMenor, diferenca }

   return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   let numerosPares = [];
   for (let i = 0; numerosPares.length < n; i++) {
      if (i % 2 == 0) {
         numerosPares.push(i);
      }
   }
   return numerosPares;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
   if (ladoA == ladoB && ladoA == ladoC) {
      return "Equilátero"
   } if (ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC) {
      return "Escaleno"
   } else {
      return "Isósceles"
   }
}


// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
   const organizar = array.sort(function (a, b) {
      return a - b
   })

   return [organizar[organizar.length - 2], organizar[1]]

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   return (`Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`)
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {

   let nome = (pessoa.nome)
   nome = "ANÔNIMO"
   return {
      nome: nome,
      idade: (pessoa.idade),
      email: (pessoa.email),
      endereco: (pessoa.endereco)
   }
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
const arrayVazio = []
for (const pessoa of pessoas){

if (pessoa.altura > 1.5 && pessoa.idade > 14 && pessoa.idade < 60){
   arrayVazio.push(pessoa)
}
}
return arrayVazio
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
   const arrayVazio = []
for (const pessoa of pessoas){

if (pessoa.altura < 1.5 || pessoa.idade <= 14 || pessoa.idade > 60){
   arrayVazio.push(pessoa)
}
}
return arrayVazio

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