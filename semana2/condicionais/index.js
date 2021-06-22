/* /* //1. Leia o código abaixo:

/*     
    const respostaDoUsuario = prompt("Digite o número que você quer testar")
    const numero = Number(respostaDoUsuario)

    if (numero % 2 === 0) {
      console.log("Passou no teste.")
    } else {
      console.log("Não passou no teste.")   
     } */

// a) Explique o que o código faz. Qual o teste que ele realiza? Se um número é divisível por dois 

//b) Para que tipos de números ele imprime no console "Passou no teste"? 
//pares

//c) Para que tipos de números a mensagem é "Não passou no teste"?
//ímpares

//2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar 
//algumas tarefas de um supermercado:

/*     let fruta = prompt("Escolha uma fruta")
    let preco
    switch (fruta) {
      case "Laranja":
        preco = 3.5
        break;
      case "Maçã":
        preco = 2.25
        break;
      case "Uva":
        preco = 0.30
        break;
      case "Pêra":
        preco = 5.5
       
      default:
        preco = 5
        break;
    }
    console.log("O preço da fruta ", fruta, " é ", "R$ ", preco) */

/* a) Para que serve o código acima? saber o preço de cada fruta

b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
O preço da fruta Mação é 2,25

c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se 
retirássemos o `break` que está logo acima do `default`(o `break` indicado pelo comentário 
"BREAK PARA O ITEM c.")?
O preço da Pêra é 5 */

/* /*     3. Leia o código abaixo:
 */
/*     const numero = Number(prompt("Digite o primeiro número."))

    if(numero > 0) {
      console.log("Esse número passou no teste")
        let mensagem = "Essa mensagem é secreta!!!"
    } */

//console.log(mensagem)

/*     a) O que a primeira linha está fazendo? Criando uma variável q usa prompt


    b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
    -10 mensagem is not defined
    10 Esse número passou no teste

    c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo. */
/*     -10 mensagem is not defined. console log deveria estar dentro do bloco */

/* 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir
 (apenas maiores de idade). */

/*     a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
 */
/*     b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.

    c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. 
    Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."` */

/*   const ReceberIdadeUsuario = Number(prompt("Qual a sua idade?"))
  if (ReceberIdadeUsuario > 18){
      console.log ("Você pode dirigir!")
  } else {
      console.log ("Você não pode dirigir :/")
  } */

/*     2. Agora faça um programa que verifica que turno do dia um aluno estuda.
     Peça para digitar **M** (matutino) ou **V** (Vespertino) ou **N** (Noturno). 
     Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco `if/else`
    - 💡 Dica
        Se o usuário digitar "V" no prompt, você deverá imprimir no console a mensagem `"Boa Tarde!"`
        Nesse caso, temos 3 resultados diferentes (Bom dia/Tarde/Noite)

        Se o usuário digitar "V", a saída deve ser:
        "Boa Tarde!" */

/* const verificaTurnoDia = prompt("Qual turno do dia você estuda? Digite M, V ou N")
   if (verificaTurnoDia === "M") {
       console.log ("Bom dia!")
   } else if (verificaTurnoDia === "V") {
       console.log ("Boa tarde!")
   } else if (verificaTurnoDia === "N") {
       console.log ("Boa noite")
   }
 */
   //3. Repita o exercício anterior, mas utilizando a estrutura de `switch case` agora.

/*     const verificaTurnoDia = prompt("Qual turno do dia você estuda? Digite M, V ou N")
   switch (verificaTurnoDia){
        case "M":
          console.log ("Bom dia!")
          break
        case "V":
            console.log ("Boa tarde!")
            break     
        case "N":
            console.log ("Boa noite!")
            break
   }

   4. Considere a situação: você vai ao cinema com um amigo ou amiga, 
   porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia 
   **e** se o ingresso está abaixo de 15 reais. 
   Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e
    outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: `"Bom filme!"`, 
   caso contrário, imprima `"Escolha outro filme :( */
   
   const escolhaFilme = prompt("Qual gênero de filme você vai assistir?")
   const precoFilme = Number(prompt("Qual o preço do filme?"))
   if (escolhaFilme === "Fantasia" && precoFilme < 15){
       console.log ("Oba! Vamos ao cinema!")
   } else {
       console.log ("Escolha outro filme :/")
   }
