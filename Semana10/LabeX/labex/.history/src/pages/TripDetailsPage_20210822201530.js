import React from "react"
import { useState, useEffect, useHistory } from "react"
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
    const   history = useHistory

    const voltar = () =>{
        history.pushState("/admin/trips/list")
    }

    const params = useParams()

   
    useProtectedPage()

    const [viagem, setViagem] = useState()

    
    useEffect(() => {
        pegaDetalhes()
    }, []);


    const pegaDetalhes = () => {
        const token = localStorage.getItem('token')

        const headers = {
            headers: {
                auth: token
            }
        }
        
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/clarice-passos-lovelace/trip/${params.id}`

       
        axios
            .get(url, headers)
            .then((res) => {
                console.log("Ok", res.data.trip)
            })
            .catch((err) => {
                console.log("Erro", err.response)
            })
    }
    const detalhesViagem = viagem.id && viagem.id..map((lista) => {
        return <div>
        <li key={lista.id}>Detalhes Viagem</li>
        <p><b>Nome:</b> {lista.name}</p>
        <p><b>Descrição:</b> {lista.trip.description}</p>
        <p><b>Planeta:</b> {lista.trip.planet}</p>
        <p><b>Duração:</b> {lista.trip.durationInDays}</p>
        <p><b>Data:</b> {lista.trip.date}</p>
        </div>
    })

    console.log("viagem", detalhesViagem)



    return (
        <div>
            <h3>Detalhes De Viagens</h3>
            {detalhesViagem}
            <button onCLick={voltar}>Voltar</button>
        </div>
    )
}