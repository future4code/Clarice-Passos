import React, { useState } from "react"
import { HomePage } from "./pages/HomePage/HomePage"
import { MatchesPage } from "./pages/MatchesPage/MatchesPage"
import styled from "styled-components"

const Conteiner = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

const Button = styled.div`
display: flex;
align-items: center;
justify-content: center;
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
  

return(
  <div>
          <div>Astromatch</div>

  <Conteiner>
      <div>{escolheTela()}</div>

  </Conteiner>
  <Button>
  <button onClick={irParaHomePage}>Home Page</button>
  <button onClick={irParaMatchesPage}>Matches</button>
</Button>
       </div>
)
}

export default App

