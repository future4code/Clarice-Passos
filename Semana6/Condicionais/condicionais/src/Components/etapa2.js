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



function Etapa2() {
  return (
    <div>
        <form>
            <Form>
            <h2>ETAPA 2: Informações educacionais para quem está cursando (ou já terminou) 
                o ensino superior**</h2>
                <label for="curso">Curso:</label>
                <input className= "input" type="text" id="curso" />

                <label for="unidade">Unidade de ensino:</label>
                <input className="input" type="text" id="unidade" />
                
            </Form>        
        </form>
    </div>
  );
}

export default Etapa2;