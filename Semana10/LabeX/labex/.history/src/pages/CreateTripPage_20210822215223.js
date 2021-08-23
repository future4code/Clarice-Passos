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
            'Content-Type': 'application/json',
        }
    })
        .then((res) => {
            alert("viagem cadastrada com sucesso", res.data)
        })
        .catch((err) => {
            console.log("erro", err.response.message)
        })

        
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

    useEffect(() => {
        pegaViagens()
    }, []);

    console.log("imprime", viagem)


    const opcoesDasViagens = viagem && viagem.map((viagens) => {
        return <option key={viagens.id}
            value={viagens.id}>{viagens.name}</option>
    })


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
                        pattern={"^.{3,}"}
                        title={"O nome deve ter no mínimo 3 letras"}
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
                        placeholder={"Texto de Candidatura"}
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