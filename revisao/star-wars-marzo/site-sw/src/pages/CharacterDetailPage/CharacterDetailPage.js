import React, { useEffect, useState } from "react"
import { useHistory } from "react-router"
import axios from "axios"
import styled from "styled-components"
import { useParams } from "react-router-dom"

const CardViagem = styled.div`
border: solid 1px red;
width: 300px;
height: 300px;
margin-right: auto;
margin-left: auto;
margin-bottom: 10px;
align: center;
margin-top: 100px;
`
const Conteiner = styled.div`
background-color: #ffe8d6;
text-align: center;
padding: 10px;
height: 95vh;
`

const CharacterDetailPage = () => {

  const params = useParams()

  const history = useHistory();

  const voltar = () => {
    history.goBack()
  }

  const [detailsUrl, setDetailsUrl] = useState({})
  const [homeworldLink, setHomeworldLink] = useState("");
  const [homeworld, setHomeworld] = useState("");

  const getCharacterUrl = (id) => {
    axios
      .get(`https://swapi.dev/api/people/${params.id}`)
      .then((r) => {
        setDetailsUrl(r.data)
        setHomeworldLink(r.data.homeworld)
      })
      .catch((err) => {
        console.log(err.response)
      })
  }


  useEffect(() => {
    getCharacterUrl()
  }, [])

  useEffect(() => {
    homeworldLink &&
      axios.get(homeworldLink).then((response) => {
        setHomeworld(response.data);
      });
  }, [homeworldLink]);

  return (
    <Conteiner>
      <CardViagem>
        <h2>Nome:</h2> <p>{detailsUrl.name}</p>
        <h3>URL:</h3> <p>{detailsUrl.url}</p>
        <h3>Origem:</h3> <p>{homeworld.name}</p>

        <button onClick={voltar}>Voltar</button>
      </CardViagem>
    </Conteiner>
  )
}


export default CharacterDetailPage;