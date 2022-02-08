import React, { useEffect, useState } from "react"
import { useHistory } from "react-router"
import axios from "axios"
import styled from "styled-components"
import { BASE_URL } from "../../constants/BASE_URL.JS";

const CardViagem = styled.div`
border: solid 1px black;
height: 200px;
`
const Conteiner = styled.div`
background-color: #ffe8d6;
height: 100vh;
text-align: center;
padding: 10px;
`

const CharacterListPage = () => {
/*     const history = useHistory()

    const voltar = () => {
        history.goBack()
    }

    const inscrever = () => {
        history.push("/trips/application")
    } */

    const [characterListPage, setCharacterListPage] = useState([])

    const getCharacterList = () => {
        axios
            .get(
                `${BASE_URL}$/people`
                )
            .then((res) => {
                setCharacterListPage(res.data)
                console.log(setCharacterListPage)
            })
            .catch((err) => {
                console.log(err.response)
            });
    }

    useEffect (() => {
        getCharacterList()
    }, []);

    const characterList = characterListPage && characterListPage.map((l) => {
        return(
            <CardViagem>
                <p>Nome:{l.name}</p>
{/*                 <p>Ano de Nascimento:{l.birth_year}</p>
                <p>Filmes:{l.films}</p>
                <p>Duração:{lista.durationInDays}</p>
                <p>Data:{listafilms.date}</p> */}
            </CardViagem>
        )
    }
    )

    return (
        <Conteiner>
            <h3>Lista De Viagens</h3>
            {characterList}
{/*             <button onClick={voltar}>Voltar</button>
            <button onClick={inscrever}>Inscrever-se</button> */}
        </Conteiner>
    )

}
export default CharacterListPage;
