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
                "https://us-central1-labenu-apis.cloudfunctions.net/labeX/clarice-passos-lovelace/trips"
                )
            .then((res) => {
                setViagem(res.data.trips)
            })
            .catch((err) => {
                console.log(err.response)
            });
    }

    useEffect (() => {
        pegaViagens()
    }, []);

    const listaDeViagens = viagem && viagem.map((lista) => {
        return(
            <CardViagem>
                <p>{lista.name}</p>
            </CardViagem>
        )
    }
    )
    return (
        <div>
            <h3>Lista De Viagens</h3>
            {listaDeViagens}
            <button onClick={irParaHome}>Voltar</button>
            <button onClick={irParaCriarViagem}>Inscrever-se</button>
        </div>
    )
}

  
  