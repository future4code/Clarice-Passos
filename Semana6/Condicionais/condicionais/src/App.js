import logo from './logo.svg';
import './App.css';
import React from "react";
import Etapa1 from './Components/etapa1';
import Etapa2 from './Components/etapa2';
import Etapa3 from './Components/etapa3';
import styled from "styled-components";
import Final from './Components/final';



  class App extends React.Component {
    state = {
      etapa:1,
    }
    
    renderizaEtapa = () => {
      switch (this.state.telaAtual) {
        case "1":
          return <Etapa1/>;
        case "2":
          return <Etapa2/>;
        case"3":
          return <Etapa3/>;
        case "4":
          return <Final/>;
        default:
          return <p>Erro! Página não encontrada</p>;
      }

    }

    mudarEtapa2 = () => {
      this.setState({etapas: valor = valor + 1})
    }
    
    render() {


  return (
          <div>
            <h1>Labenu Forms</h1>
            {this.renderizaEtapa()}
            {this.state.etapa < 4 &&(
            <button onClick = {this.irParaProximaEtapa}>Próxima etapa</button>
            )}
          </div>
        );
      }
}

export default App;
