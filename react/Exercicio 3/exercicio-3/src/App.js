import React from "react";
import { BASE_URL } from "./constantes/url";
import { useEffect, useState } from "react";
import axios from 'axios'
import styled from 'styled-components'

const CardPlaylist = styled.div`
border: solid 1px black;
height: 50px;
width: 300px;
margin: auto;
`
const Conteiner = styled.div`
background-color: #ffe8d6;
height: 100vh;
text-align: center;
padding: 10px;
`

function App() {

  const [playlist, setPlaylist] = useState([])
  const [name, setName] = useState('')


  function getPlaylist () {
    axios
      .get(BASE_URL, {
        headers: {
          Authorization: "clarice-passos-marzo"
        }
      })
      .then((res) => {
        setPlaylist(res.data.result.list)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function postPlaylist () {
    if (name !== "") {
      axios
          .post(BASE_URL, {
              id: Date.now(),
              name,
          }, {
              headers: {
                  Authorization: "clarice-passos-marzo"
              }
          })
          .then((res) => {
              setName("")
          })
          .catch((err) => {
              console.log(err)
          })
  }
  }

  useEffect(() => {
    getPlaylist();
}, [playlist]);

  return (
    <Conteiner>
            <label>
        Criar Playlist:
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Nome da Playlist"
        />
      </label>
      <button onClick={postPlaylist}>Cadastrar</button>
      <h3>Playlists</h3>
        {playlist && playlist.map((p) => (
          <CardPlaylist key={p.id} >
            <p><b>Nome da Playlist</b>: {p.name}</p>
          </CardPlaylist> ))}
          </Conteiner>
  )

}

export default App;
