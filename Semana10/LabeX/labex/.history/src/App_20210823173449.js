import React from "react";
import { Router } from "./route/Router";
import styled from "styled-components";

const Conteiner = styled.div`
display: block;
flex-direction: column;
margin: 15px 0;
background-color: #ffe8d6;
height: 1000vh;
padding: 10px;
font-family: Verdana, Geneva, Tahoma, sans-serif;
`; 

function App() {
  return (
  <Conteiner>
    <Router/>
  </Conteiner>
  )
}

export default App;
