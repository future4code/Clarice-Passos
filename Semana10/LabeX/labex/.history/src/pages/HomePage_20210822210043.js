import React from "react"
import { useHistory } from "react-router"
import styled from "styled-components"

const Conteiner = styled.div`
background-color: #ffe8d6;
height: 1000vh;
text-align: center;
font-size: 100px;
padding: 10px;
`

export const HomePage = () => {

const history = useHistory()

const irParaListadeViagens = () =>{
    history.push("/trips/list")
}

const irParaAreaAdministrativa = () =>{
    history.push("/admin/trips/list")
}

return(
    <Conteiner>
        <div>LabeX</div>
        <button onClick={irParaListadeViagens}>Ver Viagens</button>
        <button onClick={irParaAreaAdministrativa}>Área Admin</button>
    </Conteiner>
    );
};