import React from "react"
import { useHistory } from "react-router"


export const ListaDeViagens = () => {
    const history = useHistory()

    const voltar = () =>{
        history.goBack()
    }
    
    const inscrever = () =>{
        history.push("/trips/application")
    }

return(
    <div>
        <div>lista de Lista De Viagens</div>
        <button onClick={voltar}>Voltar</button>
        <button onClick={inscrever}>Inscrever-se</button>
    </div>
)
}