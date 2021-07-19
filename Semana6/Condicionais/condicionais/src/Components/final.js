
import React from "react";
import styled from "styled-components";

const Obrigada = styled.div`
background: red;
text-align: center;
color: palevioletred;
font-size: 1em;
border: 2px solid palevioletred;
border-radius: 3px;

`


function Final() {
  return (
    <div>
        <Obrigada>Obrigada por participar!</Obrigada>
    </div>
  );
}

export default Final;