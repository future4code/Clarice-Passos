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

    const params = useParams()

    useProtectedPage()

    const [viagem, setViagem] = useState([])
    const pegaDetalhes = () => {
        const token = localStorage.getItem('token')
        
        axios
            .get(url, {    
                headers: {                     
                auth: token
                }        
            })
            .then((res) => {
                setViagem("Ok", res.data.trip)
            })
            .catch((err) => {
                console.log("Erro", err.response)
            })        
    }

    useEffect (() => {
        pegaDetalhes()
    }, []);

const detalhesViagem = viagem && viagem.map((lista) => {
    return(
        <CardViagem>
            <p>Nome:{lista.name}</p>
            <p>Descrição:{lista.description}</p>
            <p>Planeta:{lista.planet}</p>
            <p>Duração:{lista.durationInDays}</p>
            <p>Data:{lista.date}</p>
        </CardViagem>
    )
})


    return (
        <div>
            {detalhesViagem}
            <h3>Detalhes De Viagens</h3>
            <button onCLick={voltar}>Voltar</button>
        </div>
    )
}