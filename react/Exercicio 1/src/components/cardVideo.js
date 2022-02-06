import React from "react";
import styled from "styled-components"



const BoxPaginaPrincipal = styled.div`
    display: grid;
    height: 300px;
    grid-template-rows: 3fr 1fr;
    grid-template-columns: 1fr;
    border-style: solid;
    border-width: thin;
    align-items: center;
    justify-items: stretch;
    img{
        max-width: 250px;
        margin: auto
    };
    h4{
  margin-left: 20px;
    }
  `;

export const CardVideo = (props) => {

    function reproduzVideo() {
        alert("O vídeo está sendo reproduzido");
    }

    const titulo = "Título do vídeo";


    return (
        <BoxPaginaPrincipal onClick={reproduzVideo}>
            <img src={props.src} alt={props.alt} />
            <h4>{titulo}</h4>
        </BoxPaginaPrincipal>
    )
}