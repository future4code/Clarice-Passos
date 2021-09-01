import React from "react"
import { useHistory } from "react-router"

export const HomePage = () => {

const history = useHistory()

const irParaListadeViagens = () =>{
    history.push("/trips/list")
}

const irParaAreaAdministrativa = () =>{
    history.push("/areadministrativa")
}

return(
    <div>
        <div>LabeX</div>
        <button onClick={irParaListadeViagens}>Ver Viagens</button>
        <button onClick={irParaAreaAdministrativa}>Área Admin</button>
    </div>
    );
};