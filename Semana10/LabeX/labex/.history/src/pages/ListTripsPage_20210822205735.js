import React, { useEffect, useState } from "react"
import { useHistory } from "react-router"
import axios from "axios"
import styled from "styled-components"

const CardViagem = styled.div`
border: solid 1px black;
height: 200px;
`
const Conteiner = styled.div`
background-color: #ffe8d6;
height: 1000vh;
text-align: center;
font-size: 100px;
padding: 10px;
`

export const ListaDeViagens = () => {
    const history = useHistory()

    const voltar = () => {
        history.goBack()
    }

    const inscrever = () => {
        history.push("/trips/application")
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
                <p>Nome:{lista.name}</p>
                <p>Descrição:{lista.description}</p>
                <p>Planeta:{lista.planet}</p>
                <p>Duração:{lista.durationInDays}</p>
                <p>Data:{lista.date}</p>
            </CardViagem>
        )
    }
    )

    return (
        <Conteiner>
            <h3>Lista De Viagens</h3>
            {listaDeViagens}
            <button onClick={voltar}>Voltar</button>
            <button onClick={inscrever}>Inscrever-se</button>
        </div>
    )
}