import React from "react"
import { useState, useEffect } from "react"
import styled from "styled-components"
import axios from "axios"
import { useHistory } from "react-router"
import { SelectPlaneta } from "../components/SelectPlaneta"


const Conteiner = styled.div`
display: block;
flex-direction: column;
margin: 15px 0;
background-color: #ffe8d6;
height: 1000vh;
padding: 10px;
font-family: Verdana, Geneva, Tahoma, sans-serif;
`; 

const Input = styled.input`
    display: block;
    margin: 15px 0;
  `

export const CriarNovaViagem = () => {

    const history = useHistory()

    const voltar = () => {
        history.push("/trips/list")
    }

    const body = {
        nome: "name",
        planet: "planet",
        date: "date",
        descripton: "description",
        durationInDays: "durationInDays"
    }

    axios.post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/clarice-passos-lovelace/trips"
        , body, {
        headers: {
            "Content-Type": "application/json",
            auth: localStorage.getItem('token')
        }
    })
        .then((res) => {
            alert("viagem cadastrada com sucesso", res.data)
        })
        .catch((err) => {
            console.log("erro", err.response.message)
        });

        
    const [form, setForm] = useState({
        name: "", planet: "",
        date: "", description: "", durationInDays: ""
    })

    const onChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const cleanFields = () => {
        setForm({  name: "", planet: "",
        date: "", description: "", durationInDays: ""});
      };

    const enviarFormulario = (event) => {
        event.preventDefault()
        console.log("Formulario enviado", form)
        cleanFields()
    }

    return (
        <Conteiner>
            <div>Crie uma viagem</div>
                <form onSubmit={enviarFormulario}>
                    <Input
                        name="name"
                        value={form.name}
                        onChange={onChange}
                        placeholder={"Nome"}
                        required
                        type={"text"}
                        pattern={"^.{5,}"}
                        title={"O nome deve ter no mínimo cinco letras"}
                    />
                      <SelectPlaneta>
                        <Input
                            name="planet"
                            value={form.planet}
                            onChange={onChange}
                            required
                            type="planet" />
                    </SelectPlaneta>
                    <Input
                        name="age"
                        value={form.age}
                        onChange={onChange}
                        placeholder={"Idade"}
                        required
                        type={"number"}
                        min={18}
                    />
                    <Input
                        name="date"
                        value={form.date}
                        onChange={onChange}
                        required
                        type={"date"}
                    />
                    <Input
                        name="description"
                        value={form.description}
                        onChange={onChange}
                        placeholder={"Descrição"}
                        required
                        type={"text"}
                        pattern={"^.{30,}"}
                        title={"O nome deve ter no mínimo trinta letras"}
                    />
                       <Input
                        name="durationInDays"
                        value={form.durationInDays}
                        onChange={onChange}
                        placeholder={"Duração em dias"}
                        required
                        type={"number"}
                    />
                  
                <button>Enviar</button>
                </form>
                <button onClick={voltar}>Voltar</button>

            </Conteiner>
    )

}