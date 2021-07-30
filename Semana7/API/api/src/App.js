import React from "react";
import styled from "styled-components";
import axios from "axios";

const Conteiner = styled.div`
font-family: sans-serif;
text-align: center;
`;


export default class App extends React.Component {
  state = {
    activity: ""

  };

  componentDidMount = () => {
    this.requisicao();
  }
  requisicao = () => {
    axios 
    .get ("https://www.boredapi.com/api/activity/")
    .then ((res) => {
      console.log(res.data)
      this.setState({activity: res.data})
    })

    .catch (err => {
      console.log(err)
    })
  }
  render (){

    return (
      <div className="App">
        <Conteiner>
        <h1>Está entendiado?</h1>
        <button onClick={this.requisicao}>Clique aqui!</button>
        <hr/>
        <h3>Atividade</h3>
        <p>Nome: {this.state.activity.activity}</p>
        <p>Tipo:{this.state.activity.type}</p>
        <p>Participantes: {this.state.activity.participants}</p>
        <p>Preço:${this.state.activity.price}</p>
        </Conteiner>
        </div>
      )
}
}