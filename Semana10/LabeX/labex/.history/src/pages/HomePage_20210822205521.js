import React from "react"
import { useHistory } from "react-router"
import styled from "styled-components"

const Conteiner = styled.div`
background-color: #ffe8d6;
wi
`

export const HomePage = () => {

const history = useHistory()

const irParaListadeViagens = () =>{
    history.push("/trips/list")
}

const irParaAreaAdministrativa = () =>{
    history.push("/areadministrativa")
}

return(
    <Conteiner>
        <div>LabeX</div>
        <button onClick={irParaListadeViagens}>Ver Viagens</button>
        <button onClick={irParaAreaAdministrativa}>Área Admin</button>
    </Conteiner>
    );
};