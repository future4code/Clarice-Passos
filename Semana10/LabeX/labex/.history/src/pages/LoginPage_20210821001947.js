import React from "react"
import { useState } from "react"
import axios from "axios"
import { useHistory } from "react-router-dom";

export const Login = () => {
const [email, setEmail] = useState("");
const [senha, setSenha] = useState("");

const history = useHistory()

const mudaEmail = (event) => {
    setEmail(event.target.value)
}

const mudaSenha = (event) => {
    setSenha(event.target.value)
}

const fazerLogin = () =>{
    console.log(email, senha)
    const body = {
        "email": email,
        "password": senha
    }
    
    axios.post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/clarice-passos-lovelace/login"
        , body, {    
            headers: {                     
            'Content-Type': 'application/json'
            }        
        })
        
        .then((res) => {
            console.log("Ok", res.data)
            localStorage.setItem('token', res.data.token)
            history.push("/admin/trips/list");
        })
        .catch((err) => {
            console.log("Erro", err.response)
        })
}

return(
<div>
    <input
        placeholder="email"
        type={"email"} required
        value={email}
        onChange={mudaEmail}
    />
        <input
        placeholder="senha"
        type={"password"} required
        value={senha}
        onChange={mudaSenha}
    />
    <button onClick={fazerLogin}>Enviar</button>
</div>

)
}