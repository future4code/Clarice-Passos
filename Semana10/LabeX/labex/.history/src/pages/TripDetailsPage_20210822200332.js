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
        console.log(token)
       
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
    const detalhesViagem = viagem && viagem.trip && viagem.trip.approved.map((c) => {
        return <li key={c.id}>{c.name}</li>
        <p><b>Nome:</b> {detalhesViagem.trip.name}</p>
        <p><b>Descrição:</b> {detalhesViagem.trip.description}</p>
        <p><b>Planeta:</b> {detalhesViagem.trip.planet}</p>
        <p><b>Duração:</b> {tripDetails.trip.durationInDays}</p>
        <p><b>Data:</b> {tripDetails.trip.date}</p>
    })

    console.log("candidatos", candidateAprovados)

   

    {tripDetails && tripDetails.trip && <h1>{tripDetails.trip.name}</h1>}
    {tripDetails && tripDetails.trip && <TripDataContainer>
        <p><b>Nome:</b> {tripDetails.trip.name}</p>
        <p><b>Descrição:</b> {tripDetails.trip.description}</p>
        <p><b>Planeta:</b> {tripDetails.trip.planet}</p>
        <p><b>Duração:</b> {tripDetails.trip.durationInDays}</p>
        <p><b>Data:</b> {tripDetails.trip.date}</p>

    return (
        <div>
            <h3>Detalhes De Viagens</h3>
            <button onCLick={voltar}>Voltar</button>
        </div>
    )
}