import { useProtectedPage } from "../customHooks/UseProtectePage"
import { useHistory } from "react-router"
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { useRequestData } from "../customHooks/UseRequestData"
import axios from "axios"

const CardViagem = styled.div`
border: solid 1px black;
height: 100px;
`

export const AreaAdministrativa = () => {
    useProtectedPage()

    const history = useHistory()

    const irParaHome = () => {
        history.push("/")
    }

    const irParaCriarViagem = () => {
        history.push("/admin/trips/create")
    }

    const [viagem, setViagem] = useState([])

    const pegaViagens = () => {
        axios
            .get(
                'https://us-central1-labenu-apis.cloudfunctions.net/labeX/clarice-passos-lovelace/trips',
                )
            .then((res) => {
                setViagem(res.data.trips);
            })
            .catch((err) => {
                console.log(err.response);
            });
    }

    console.log(viagem)

    useEffect (() => {
        pegaViagens()
    }, []);



    

    const deletaViagem = (id) =>{
        const token = localStorage.getItem('token')
        console.log("ID", viagem.id)
        const url =  `https://us-central1-labenu-apis.cloudfunctions.net/labeX/clarice-passos-lovelace/trips/${id}`
        const headers = {
            headers:{
                auth: token
            
            }
        }
       
            axios
            .delete(url, headers)
            .then((res) =>{
                pegaViagens()
                console.log("deletou",res.data)
            })
            .catch((err) =>{
                console.log(err.response)
            })
        
    }

    const listaDeViagens = viagem && viagem.map((lista) => {
        return(
            <CardViagem>
                <button>{lista.name}<>
                <button onClick={() => deletaViagem(lista.id)}>X</button>
            </CardViagem>
        )
    }
    )
    return (
        <div>
            <h3>Lista De Viagens</h3>
            {listaDeViagens}
            <button onClick={irParaHome}>Voltar</button>
            <button onClick={irParaCriarViagem}>Criar viagem</button>
        </div>
    )
}

  
  