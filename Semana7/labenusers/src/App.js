import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const url =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const headers = {
  headers: {
  "Authorization": "clarice-passos-lovelace"
  }
};

export default class App extends React.Component{
  state = {
    arrayDeNomes:[], //listausuario

    inputNome: "", //telacadastro
    inputEmail: ""

  };

  componentDidMount() {
    this.pegarListaUsuario(); 
  }

  mudaInputNome = (e) => {
    this.setState({inputNome: e.target.value });

  };

  mudaInputEmail = (e) => {
    this.setState({ inputEmail: e.target.value });
  };

  pegarListaUsuario = () => {
    axios
      .get(url, headers)
      .then((res) => {
        this.setState({ arrayDeNomes: res.data });
        console.log("Usuários", res.data)

      })
      .catch((err) => {
        alert(err.response.data);
        console.log("Erro")
      });
  };

  criarUsuario = () => {
    const body = {
      name: this.state.inputNome,
      email: this.state.inputEmail
    };

    axios
      .post(url, body, headers)
      .then((res) => {
        alert("Usuario adicionada com sucesso");
        this.setState({ inputUsuario: "" });
        this.setState({ inputEmail: "" });
        this.pegarListaUsuario()
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  render() {
    const componentesUsuarios = this.state.arrayDeNomes.map((item) => {
      return <div key={item.id}>{item.name}</div>;
    });

    return (
      <div>
        <h1>Labenusers</h1>
        <p>Nome:</p>
        <input 
          value={this.state.inputNome}
          onChange={this.mudaInputNome}
        />
        <p>E-mail:</p>
        <input
          value={this.state.inputEmail}
          onChange={this.mudaInputEmail}
        />
        <button onClick={this.criarUsuario}>Enviar</button>
        {componentesUsuarios}
      </div>
    );
  }
}
