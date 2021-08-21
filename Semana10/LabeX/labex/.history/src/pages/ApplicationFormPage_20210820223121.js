import React from "react"
import { useState, useEffect } from "react"
import { SelectPais } from "../components/SelectPais"
import styled from "styled-components"
import axios from "axios"
import { useHistory } from "react-router"

const Conteiner = styled.div`
display: block;
flex-direction: column;
margin: 15px 0;
`;

const Input = styled.input`
    display: block;
    margin: 15px 0;
  `

export const FormularioInscricao = () => {

    const history = useHistory()

    const voltar = () => {
        history.push("/trips/list")
    }


    const body = {
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
        .then((res) => {
            console.log( res.data)
        })
        .catch((err) => {
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

    const cleanFields = () => {
        setForm({  name: "", age: "",
        applicationText: "", profession: "", country: ""});
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
                "https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/trips"
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
        <div>
            <div>Inscreva-se para uma viagem</div>
            <Conteiner>
                <form onSubmit={enviarFormulario}>
                    <select>
                        {opcoesDasViagens}
                    </select>
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
                        name="applicationText"
                        value={form.applicationText}
                        onChange={onChange}
                        placeholder={"Texto de Candidatura"}
                        required
                        type={"text"}
                    />
                    <Input
                        name="profession"
                        value={form.profession}
                        onChange={onChange}
                        placeholder={"Profissão"}
                        required
                        type={"text"}
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
                <button onClick={voltar}>Voltar</button>

            </Conteiner>
        </div>
    )

}