import React from "react";
import NavBar from "../components/NavBar";
import styled from "styled-components"
import { useState, useEffect } from "react";
import axios from "axios"

const Conteiner = styled.div`
display: flex;
flex-wrap: column;
font-family: 'Montserrat';
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
/* celulares */
};

`

const ConteinerGreen = styled.div`
position: float;
width: 75%;
height: 100vh;
border-bottom-right-radius: 30%;
border-top-right-radius: 30%;
background: #5aad7d;
text-align: center;
font-family: 'Montserrat';

`

const ConteinerGray = styled.div`
background-color: #e6e7e7;
height:100vh;
width:100vw;
font-family: 'Montserrat';

`
const Circle = styled.div`
width: 75px;
height: 75px;
border-radius: 50%;
margin: black solid;
background-color: white;
margin-left: auto;
margin-right: auto;
margin-top: 75px;
margin-bottom: auto;
font-weight: bolder;
font-size: 25px;
padding: 10px;
`

const NumberConteiner = styled.div`
display: flex;
`
const ConteinerInfo = styled.div`
font-size: 30px;
margin: 10px;
padding: 5px;
line-height: 2;
`


export const TimeMania = () => {


    const [concursos, setConcursos] = useState([])

    const getConcursos = () => {
        axios.get(`https://brainn-api-loterias.herokuapp.com/api/v1/concursos/1622`)

            .then((res) => {
                setConcursos(res.data)
                console.log(res.data)

            }).catch((err) => {
                console.log(err)
            })
    }

    console.log(concursos)


    useEffect(() => {

        getConcursos()
    }, [])


  const renderLoteriasNumeros = concursos.length && concursos.numeros.map ((i) => {
         <div key={i}>{i}</div>
    }) 


    const data = new Date(concursos?.data)
    const dataFormatada = data.toLocaleDateString("pt-BR", { timeZone: "UTC" })




    return (
        <Conteiner>

            <ConteinerGray>

                <ConteinerGreen >
                    <NavBar />
                    <ConteinerInfo>
                        <div>TIMEMANIA</div>

                        <div>Concurso:
                            {concursos.id}</div>

                        <div >Data:{dataFormatada}</div>
                    </ConteinerInfo>

                    { concursos.numeros && <NumberConteiner>
                        <Circle><p>{concursos.numeros[0]}</p></Circle>
                        <Circle><p>{concursos.numeros[1]}</p></Circle>
                        <Circle><p>{concursos.numeros[2]} </p></Circle>
                        <Circle><p>{concursos.numeros[3]} </p></Circle>
                        <Circle><p>{concursos.numeros[4]} </p></Circle>
                        <Circle><p>{concursos.numeros[5]} </p></Circle>  
                    </NumberConteiner>}

                </ConteinerGreen>

            </ConteinerGray >

        </Conteiner>)

}