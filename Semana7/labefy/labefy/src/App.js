import React from "react";
import styled from "styled-components";
import axios from "axios";

const Conteiner = styled.div`
font-family: sans-serif;
text-align: center;
`;

const CardUsuario = styled.div`
border: 1px solid black;
padding: 10px;
margin: 10px;
justify-content: space-between;
display:flex;
`

export default class App extends React.Component{
  state = {
      inputPlaylist:"",
      arrayDePlaylists:[],
  }


pegarListaUsuario = () => {
    const url =
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

    axios.get(url, {
          headers: {
                Authorization: "clarice-passos-lovelace"
            },
        })

    .then((res) => {
        this.setState({ arrayDePlaylists: res.data.result.list });
        console.log("Playlist", res.data.result.list)
    })

    .catch((err) => {
        console.log("Erro")
    })
}

componentDidMount() {
  this.pegarListaUsuario()}


  mudaInputPlaylist = (e) => {
      this.setState({inputPlaylist: e.target.value });
      };

  criarPlaylist = () => {
        const url =
            "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
          name: this.state.inputPlaylist
        };

        axios.post(url, body, {
            headers:{
                Authorization: "clarice-passos-lovelace"
            }
        })

        .then((res) => {
            alert("Usuario adicionada com sucesso");
            this.setState({ inputPlaylist: ""});
            this.pegarListaUsuario()
        })

        .catch((err) => {
            alert(err.response.data);
        });
        console.log(this.criarPlaylist)
    }


  deletarUsuario = (id) =>{
    const url =
     `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`    
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

  const componentesUsuarios = this.state.arrayDePlaylists.map((item) => {
    return <CardUsuario key={item.id}>
                {item.name}
                <button onClick = {() => this.deletarUsuario(item.id)}>X</button>
            </CardUsuario>;
});

    return (
      <div className="App">
        <Conteiner>
        <h3>Criar playlist</h3>
        <input 
        value={this.state.inputPlaylist}
        placeholder="Nome playlist"
        onChange={this.mudaInputPlaylist}/>
        <button onClick={this.criarPlaylist}>Enviar</button>
        </Conteiner>
        {componentesUsuarios}
        </div>
      )
}
}