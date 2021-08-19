import React from "react"
import { useState } from "react"
import { SelectPais } from "../components/SelectPais"
import styled from "styled-components"
import { assertExpressionStatement } from "@babel/types";
import axios from "axios";

const Conteiner = styled.div`
display: block;
flex-direction: column;
margin: 15px 0;
`;

const Input =styled.input`
    display: block;
    margin: 15px 0;
  `
  


export const FormularioInscricao = () => {
        const body =  {
        name: "name",
        age: "age",
        applicationText: "applicationText",
        profession: "profession",
        country: "country"
        }

        axios.post(
            "https://us-central1-labenu-apis.cloudfunctions.net/labeX/clarice-passos-lovelace/trips/:id/apply"
            , body, {    
                headers: {                     
                'Content-Type': 'application/json'
                }        
            })
        .then((res) =>{
                console.log("ok", res.data)
        })
        .catch((err) =>{
                console.log("erro", err.response.message)
                alert("erro", err.response.message)
        })




    const [form, setForm] = useState({
        name: "", age: "",
        applicationText: "", profession: "", country: ""
    })

    const onChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const enviarFormulario = (event) => {
        event.preventDefault()
    }

    console.log(form)

    return (
        <div>
            <div>Inscreva-se para uma viagem</div>
            <Conteiner>
                <form onSubmit={enviarFormulario}>
                    <Input
                        name="name"
                        value={form.name}
                        onChange={onChange}
                        placeholder={"Nome"}
                        required
                        type="text"
                    />
                    <Input
                        name="age"
                        value={form.age}
                        onChange={onChange}
                        placeholder={"Idade"}
                        required
                        type="number"
                    />
                    <Input
                        name="applicationText"
                        value={form.applicationText}
                        onChange={onChange}
                        placeholder={"Texto de Candidatura"}
                        required
                        type="text"
                    />
                    <Input
                        name="profession"
                        value={form.profession}
                        onChange={onChange}
                        placeholder={"Profissão"}
                        required
                        type="text"
                    />
                    <SelectPais>
                        <Input
                            name="country"
                            value={form.country}
                            onChange={onChange}
                            required
                            type="country" />
                    </SelectPais>
                    <button>Enviar</button>
                </form>
            </Conteiner>
        </div>
    )

}