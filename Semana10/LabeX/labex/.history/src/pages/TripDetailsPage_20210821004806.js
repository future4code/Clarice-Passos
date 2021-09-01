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

export const DetalhesViagem = (id) => {
    const params = useParams()       
    useProtectedPage()

    const [viagem, setViagem] = useState([])
    const pegaDetalhes = () => {
        const token = localStorage.getItem('token')
        const headers = {
            headers:{
                auth: token
            
            }
        }
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/clarice-passos-lovelace/trip/${params.id}`

        axios
            .get(u)
        
        headers)
            .then((res) => {
                console.log("Ok", res.data.trip)

            })
            .catch((err) => {
                console.log("Erro", err.response)
            })
        }

        useEffect (() => {
            pegaDetalhes()
        }, []);

        console.log("Detalhes", viagem)

    return (
        <div>
            <Titulo>Detalhes da viagem</Titulo>
            <Conteiner>
            </Conteiner>
        </div>
    )
}