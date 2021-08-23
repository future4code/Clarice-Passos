import React from "react"
import { useState, useEffect, useHistory } from "react"
import axios from "axios"
import { useProtectedPage } from "../customHooks/UseProtectePage"
import styled from "styled-components"
import { useParams } from "react-router"


const CardViagem = styled.div`
border: solid 1px black;
height: 200px;
`

const Conteiner = styled.div`
background-color: #ffe8d6;
height: 1000vh;
text-align: center;
padding: 10px;
`


export const DetalhesViagem = () => {
    const   history = useHistory

    const voltar = () =>{
        history.pushState("/admin/trips/list")
    }


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
            }).catch((err) => {
                console.log("Erro", err.response)
            });        
    }

    useEffect (() => {
        pegaDetalhes()
    }, []);

    return(
        <Conteiner>
        <h2></h2>
        <CardViagem>
            <p>Nome:{viagem.name}</p>
            <p>Descrição:{viagem.description}</p>
            <p>Planeta:{viagem.planet}</p>
            <p>Duração:{viagem.durationInDays}</p>
            <p>Data:{viagem.date}</p>
        </CardViagem>
        <button onClick={voltar}>Voltar</button>
        </Conteiner>
)
}