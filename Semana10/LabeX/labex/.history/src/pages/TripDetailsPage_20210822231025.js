import React from "react"
import { useState, useEffect, useHistory } from "react"
import axios from "axios"
import { useProtectedPage } from "../customHooks/UseProtectePage"
import styled from "styled-components"
import { useParams } from "react-router"


const CardViagem = styled.div`
border: solid 1px black;
height: 200px;
font-family: Verdana, Geneva, Tahoma, sans-serif;
padding: 10px;
`
const CardViagem2 = styled.div`
border: solid 1px black;
height: 110px;
font-family: Verdana, Geneva, Tahoma, sans-serif;
padding: 10px;
`
const Conteiner = styled.div`
background-color: #ffe8d6;
height: 98vh;
text-align: center;
padding: 10px;
`
const Button = styled.button`
padding: 10px;
margin-top: 5px;
`

export const DetalhesViagem = () => {
    
    useProtectedPage()

    const [viagem, setViagem] = useState([])

    const params = useParams()
    const pegaDetalhes = () => {
        axios
            .get(`
            https://us-central1-labenu-apis.cloudfunctions.net/labeX/clarice-passos-lovelace/trip/${params.id}`
            , { 
                headers: {
                    auth: localStorage.getItem("token")
                }
            }) .then((res) => {
                setViagem(res.data.trip)
                setCandidatos(res.data.trip.candidates)
                setAprovados(res.data.trip.approved)

            }).catch((err) => {
                console.log("Erro", err.response)
            });        
    }

    useEffect (() => {
        pegaDetalhes()
    }, []);

    const history = useHistory;
    const voltar = () =>{
        history.goBack()
    }

    const [candidatos, setCandidatos] = ([])
    const [aprovados, setAprovados] =([])

    const decideCandidato = (id, decision) =>{
        const body = {
            approve: decision   
        }
    }

    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/clarice-passos-lovelace/trips/${tripId}/candidates/${candidateId}/decide
    `

    axios.put(url, body, headers)

    return(
        <Conteiner>
        <h2>Detalhes Viagem</h2>
        <CardViagem>
            <p><b>Nome</b>:{viagem.name}</p>
            <p><b>Descri????o</b>:{viagem.description}</p>
            <p><b>Planeta</b>:{viagem.planet}</p>
            <p><b>Dura????o</b>:{viagem.durationInDays}</p>
            <p><b>Data</b>:{viagem.date}</p>
        </CardViagem>
        <CardViagem2>
        <h3>Candidatos em an??lise</h3>
        <p>{candidatos ? 
        candidatos.map((candidato) => {return candidato.name}) : "Sem candidatos" }</p>
        </CardViagem2>
        <CardViagem2>
        <h3>Candidatos aprovados</h3>
        <p>{aprovados ? 
        aprovados.map((aprovados) => {return aprovados.name}) : "Sem aprovados" }</p>
        </CardViagem2>
                <Button onClick={voltar}>Voltar</Button>
        </Conteiner>

)
}