import React from "react";
import NavBar from "../components/NavBar";
import styled from "styled-components"
import { useState, useEffect } from "react";
import axios from "axios"

const Conteiner = styled.div`
display: flex;
flex-wrap: column;
font-family: 'Montserrat';
`

const ConteinerGreen = styled.div`
position: float;
width: 60%;
height: 100vh;
border-bottom-right-radius: 40%;
border-top-right-radius: 40%;
background: #6BEFA3;
text-align: center;
font-family: 'Montserrat';

`

const ConteinerGray = styled.div`
background-color: #e6e7e7;
height:100vh;
width:100vw;
font-family: 'Montserrat';

`



export const MegaSena = () => {

    const [loterias, setLoterias] = useState([])
    const [loteriasConcursos, setLoteriasConcursos] = useState([])
    const [concursos, setConcursos] = useState([])

    const getLoterias = () => {
        axios.get('https://brainn-api-loterias.herokuapp.com/api/v1/loterias')

            .then((res) => {
                setLoterias(res.data)
            }).catch((err) => {
                console.log(err)
            })
    }

    const getLoteriasConcurso = () => {
        axios.get('https://brainn-api-loterias.herokuapp.com/api/v1/loterias-concursos')

            .then((res) => {
                setLoteriasConcursos(res.data)
            }).catch((err) => {
                console.log(err)
            })
    }


    const getConcursos = () => {
        axios.get(`https://brainn-api-loterias.herokuapp.com/api/v1/concursos/2359`)

            .then((res) => {
                setConcursos(res.data)
                console.log(res.data)

            }).catch((err) => {
                console.log(err)
            })
    }


    useEffect(() => {
        getLoterias()
        getLoteriasConcurso()
        getConcursos()
    }, [])


    const renderLoterias = loteriasConcursos.map((index) => {
        return <div key={index.loteriaId}> {index.loteriaId} {index.concursoId}</div>
    })

    const renderLoteriasConcurso = loterias.map((index) => {
        return <div key={index.id}> {index.id} {index.nome}</div>
    })



    console.log(concursos)

  

    return (
        <Conteiner>

            <ConteinerGray>         

                <ConteinerGreen >
                    <NavBar />
                    <p>Megasena</p>
                    <p>Concurso</p>
                    <div>{concursos.id}</div>
                    <div>{concursos.data}</div>
                    {renderLoterias}
                    {renderLoteriasConcurso}
{/*   <div>{concursos.numeros[0]} </div>
                <div>{concursos.numeros[1]} </div>
                <div>{concursos.numeros[2]} </div>
                <div>{concursos.numeros[3]} </div>
                <div>{concursos.numeros[4]} </div>
                <div>{concursos.numeros[5]} </div>  */}
                </ConteinerGreen>

            </ConteinerGray >



        </Conteiner>
    )
}