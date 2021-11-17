import React from "react";
import NavBar from "../components/NavBar";
import styled from "styled-components"

const Conteiner = styled.div`
display: flex;
flex-wrap: column;
`

const ConteinerGreen = styled.div`
width: 48%;
height: 100vh;
background: #6BEFA3;
text-align: center;
`

const ConteinerGray = styled.div`
background-color: #e6e7e7;
height:100vh;
width: 49%;
`

export const MegaSena = () => {

    return (
        <Conteiner>
            <ConteinerGreen >
                 <NavBar />
                 <p>Megasena</p>   
                 </ConteinerGreen>
                <ConteinerGray> </ConteinerGray >
         
        </Conteiner>
    )
}