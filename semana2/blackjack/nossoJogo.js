/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)

 */
console.log("Boas vindas ao jogo de Blackjack!")

if (confirm("Você quer jogar Blackjack?")) {

   const carta = comprarCarta();

   const cartasUsuario = []

   const cartasComputador = []

   cartasUsuario.push(comprarCarta(), comprarCarta())
   console.log(`Usuário ${cartasUsuario[0].texto} ${cartasUsuario[1].texto} resultado: ${cartasUsuario[0].valor+cartasUsuario[1].valor}`)


   cartasComputador.push(comprarCarta(), comprarCarta())
   console.log(`Computador ${cartasComputador[0].texto} ${cartasComputador[1].texto} resultado: ${cartasComputador[0].valor+cartasComputador[1].valor}`)

   if (cartasUsuario[0].valor+cartasUsuario[1].valor > cartasComputador[0].valor+cartasComputador[1].valor) {
      console.log("Usuário venceu!")

   } else {
      console.log("Computador venceu!")

   }
} else {

   console.log("O jogo acabou 😞 ")
}

