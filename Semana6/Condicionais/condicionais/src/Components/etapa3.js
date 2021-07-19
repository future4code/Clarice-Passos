import React from "react";
import styled from "styled-components";

const Form = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 15px;
margin-top: 5px; 

.input{
margin-top: 10px;
}

`;



function Etapa3() {
  return (
    <div>
        <form>
            <Form>
            <h2>ETAPA 3: Informações sobre quem não se formou no ensino superior 
              nem está cursando</h2>
                <label for="terminou">1. Por que você não terminou um curso de graduação?:</label>
                <input className= "input" type="text" id="terminou" />

                <label for="complementar">1. Por que você não terminou um curso de graduação?</label>
                <select className = "input" name="select">
                <option value="cursotecnico">Curso técnico</option>
                <option value="ingles">Inglês</option>
                <option value="nao">Não fiz curso complementar</option>
                </select>
                
            </Form>        
        </form>
    </div>
  );
}

export default Etapa3;