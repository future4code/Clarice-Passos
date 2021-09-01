import React from "react"
import { useState, useEffect } from "react"
import axios from "axios"
import { useProtectedPage } from "../customHooks/UseProtectePage"
import styled from "styled-components"
import { useParams } from "react-router"

const Titulo = styled.div`
font-family: Verdana, Geneva, Tahoma, sans-serif;
color: gray;
font-weight: bold;
size: 50px;
text-align: center;
`

const Conteiner = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: black solid 1px;
height: 600px;
width: 500px;
margin-left: auto;
margin-right: auto;
`

export const DetalhesViagem = () => {
    const params = useParams()
    useProtectedPage()

    const [viagem, setViagem] = useState([])
    const pegaDetalhes = () => {
        const token = localStorage.getItem('token')

        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/clarice-passos-lovelace/trip/${params.id}`


       
        axios
            .get(url, headers)
            .then((res) => {
                setViagem("Ok", res.data.trip)
            })
            .catch((err) => {
                console.log("Erro", err.response)
            })
    }

    useEffect(() => {
        pegaDetalhes()
    }, []);

    const listaDeViagens = viagem && viagem.map((lista) => {

        return(
                <div>
                <p>Nome:{lista.planet}</p>
                <p>Descrição:{lista.description}</p>
                <p>Duração:{lista.durationInDays}</p>
                <p>Data:{lista.date}</p>
                <p>Descrição:{lista.description}</p>
                </div>
        )
    }
    )

    return (
        <div>
            <h3>Detalhes De Viagens</h3>
            {listaDeViagens}
        </div>
    )
}