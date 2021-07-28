import React from "react";
import axios from "axios";


export default class TelaCadastro extends React.Component{
    state = {
        nome :"",
        email:""
    }

    mudaInputNome = (e) => {
        this.setState({inputNome: e.target.value });
        };
    
    mudaInputEmail = (e) => {
        this.setState({ inputEmail: e.target.value });
        };

    criarUsuario = () => {
        const url =
            "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

        const body = {
          name: this.state.inputNome,
          email: this.state.inputEmail
        };

        axios.post(url, body, {
            headers:{
                "Authorization": "clarice-passos-lovelace"
            }
        })

        .then((res) => {
            alert("Usuario adicionada com sucesso");
            this.setState({ inputUsuario: "", inputEmail: "" });
            this.pegarListaUsuario()
        })

        .catch((err) => {
            alert(err.response.data.message);
        });

            }


    render(){
        return(
            <div>
                <button onClick={this.props.irParaLista}>Ir para lista de usuários
                    </button>
                <h2>Tela Cadastro</h2>
        <p>Nome:</p>
        <input 
          value={this.state.inputNome}
          placeholder={"Nome"}
          onChange={this.mudaInputNome}
        />
        <p>E-mail:</p>
        <input
          value={this.state.inputEmail}
          placeholder={"Email"}
          onChange={this.mudaInputEmail}
        />
        <button onClick={this.criarUsuario}>Enviar</button>
            </div>
        )
    }
}