import React from 'react';
import styled from 'styled-components';

const BigCardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 90px;
    
    img{
       width: 70px;
    margin-right: 10px;
    border-radius: 50%;}
    
    h4 {
    margin-bottom: 15px;}


    container > div {
    display: flex;
    flex-direction: column;
    justify-items: flex-start;}
`

function CardPequeno(props) {
    return (
        <BigCardContainer>
            <img src={ props.imagem } />
                <strong><p>{ props.palavra }</p></strong>
                <p>{ props.email }</p>
        </BigCardContainer>    
    )
}

export default CardPequeno;