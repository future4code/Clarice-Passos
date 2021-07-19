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



function Etapa1() {
  return (
    <div>
        <form>
            <Form>
            <h2>Etapa 1: dados gerais</h2>
                <label for="nome">Nome:</label>
                <input className= "input" type="text" id="nome" />

                <label for="email">E-mail:</label>
                <input className="input" type="email" id="email" />

                <label for="idade">Idade:</label>
                <input className="input" type="number" id="idade" />

                <label for="Escolaridade">Escolaridade:</label>
                <select className = "input" name="select">
                <option value="ensinomedioincompleto">Ensino Médio Incompleto</option>
                <option value="ensinomediocompleto">Ensino Médio Completo</option>
                <option value="ensinosuperiocompleto">Ensino Superior Completo</option>
                <option value="ensinosuperioincompleto">Ensino Superior Incompleto</option>
                </select>
            </Form>        
        </form>
    </div>
  );
}

export default Etapa1;