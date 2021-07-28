import React from "react";
import axios from "axios";
import styled from "styled-components"

const CardUsuario = styled.div`
border: 1px solid black;
padding: 10px;
margin: 10px;
justify-content: space-between;
display:flex;
`

export default class TelaLista extends React.Component{
    state = {
        arrayDeNomes:[], //listausuario
    };
    
    componentDidMount() {
        this.pegarListaUsuario() 
    }
    
    pegarListaUsuario = () => {
        const url =
            "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

        axios.get(url, {
              headers: {
                    "Authorization": "clarice-passos-lovelace"
                }
        })

        .then((res) => {
            this.setState({ arrayDeNomes: res.data });
            console.log("Usuários", res.data)
        })

        .catch((err) => {
            alert(err.response.data);
            console.log("Erro")
        })
    
    }

    deletarUsuario = (id) =>{
       const url =
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`    
        axios.delete(url, {
            headers:{
                Authorization: "clarice-passos-lovelace"
            }
        })

        .then((res) => {
            alert ("Sucesso")
            this.pegarListaUsuario()
        })

        .catch((err) => {
            alert ("Erro")
        })
    }
    

    render(){
        const componentesUsuarios = this.state.arrayDeNomes.map((item) => {
            return <CardUsuario key={item.id}>
                        {item.name}
                        <button onClick = {() => this.deletarUsuario(item.id)}>X</button>
                    </CardUsuario>;
        });

        return(
            <div>
                <button onClick={this.props.irParaLista}>Ir para cadastro</button>
                <h2>Lista Usuários</h2>
                {componentesUsuarios}
            </div>
        )
    }
}