import React, { useState } from "react"
import { HomePage } from "./pages/HomePage/HomePage"
import { MatchesPage } from "./pages/MatchesPage/MatchesPage"
import styled from "styled-components"
import axios from "axios"

const Conteiner = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: CAC2B5;
`

const Button = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
const Titulo = styled.div`
display: flex;
align-items: center;
justify-content: center;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-size: 40px;
font-weight: bold;
color: #4d243d;
`

const App = () => {
  //Renderização Condicional
 const [telaAtual, setTelaAtual] = useState("home page")


  const escolheTela = () => {
        switch(telaAtual){
          case "home page":
            return <HomePage/>
          case "matches page":
            return <MatchesPage/>
          default:
          return <div>Erro</div>
        }
    }
  
    const irParaHomePage = () => {
      setTelaAtual("home page")
    }
    
    const irParaMatchesPage = () => {
      setTelaAtual("matches page")
    }
  
    const limpar = (props) =>{
      axios
          .put(
            "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/clarice-passos-lovelace/clear"
            )
            .then((res) => {
              alert("Matches apagados")
              props.getProfile()

          })
          .catch((err) =>{
              console.log(err.response)
          }); 
  }


return(
  <div>
          <Titulo>Astromatch</Titulo>

  <Conteiner>
      <div>{escolheTela()}</div>

  </Conteiner>
  <Button>
  <button onClick={irParaHomePage}>Home Page</button>
  <button onClick={irParaMatchesPage}>Matches</button>
  <button onClick={limpar}>Limpar</button>

  </Button>
       </div>
)
}

export default App

