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
        <CardViagem>
            <p>Nome:{trip.name}</p>
            <p>Descrição:{lista.description}</p>
            <p>Planeta:{lista.planet}</p>
            <p>Duração:{lista.durationInDays}</p>
            <p>Data:{lista.date}</p>
        </CardViagem>
)



    return (
        <div>
            {detalhesViagem}
            <h3>Detalhes De Viagens</h3>
            <button onClick={voltar}>Voltar</button>
        </div>
    )
}