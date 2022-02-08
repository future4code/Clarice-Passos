import React, { useEffect, useState } from "react"
import { useHistory } from "react-router"
import axios from "axios"
import styled from "styled-components"
import BASE_URL from "../../constants/BASE_URL.JS";

const CardViagem = styled.div`
border: solid 1px red;
width: 300px;
height: 70px;
margin-right: auto;
margin-left: auto;
margin-bottom: 10px;
`
const Conteiner = styled.div`
background-color: #ffe8d6;
text-align: center;
padding: 10px;
`

const CharacterListPage = () => {

    const [characterListPage, setCharacters] = useState([])

    const getCharacterList = () => {
        axios
            .get('https://swapi.dev/api/people')
            .then((r) => {
                setCharacters(r.data.results)
                console.log(r.data.results)
            })
          .catch((err) => {
                console.log(err.response)
            })
    }

      useEffect(() => {
        getCharacterList()
    }, [])

    return (
        <Conteiner>
            <h1>LISTA DE PERSONAGENS</h1>
            {characterListPage && characterListPage.map((l, index) => 
                <CardViagem key={index} >
                    <h2>Name:{l.name}</h2>
                    </CardViagem>)}
        </Conteiner>
    )
}


export default CharacterListPage;
