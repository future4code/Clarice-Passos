import React from "react";
import styled from 'styled-components';

const BotoesMenuVertical = styled.div`
list-style: none;
`


export const ItemVideo = ( {text} ) => {
    return (
        <BotoesMenuVertical>
            {text}
        </BotoesMenuVertical>
    )   
}
