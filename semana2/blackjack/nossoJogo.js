/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)

 */
console.log("Boas vindas ao jogo de Blackjack!")

if(confirm("Você quer jogar Blackjack?")) {
  
const carta = comprarCarta(); 

const cartasUsuario = []

const cartasComputador = []

cartasUsuario.push(comprarCarta(), comprarCarta())
console.log(`Usuário ${carta.texto} ${carta.valor}`,cartasUsuario)


cartasComputador.push(comprarCarta(), comprarCarta())
console.log(`Computador ${carta.texto} ${carta.valor}`,cartasComputador)

if (cartasUsuario > cartasComputador) { 
   console.log("Usuário venceu!")
  
}else{
      console.log("Computador venceu!")

      }
   } else {

      console.log("O jogo acabou 😞 ")
}

