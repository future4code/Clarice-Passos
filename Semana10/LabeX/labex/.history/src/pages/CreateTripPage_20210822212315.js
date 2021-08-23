import React from "react"
import { useProtectedPage } from "../customHooks/UseProtectePage"
import { useForm } from '../customHooks/UseForm'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import styled from "styled-components";

const Conteiner = styled.div`
display: block;
flex-direction: column;
margin: 15px 0;
background-color: #ffe8d6;
height: 1000vh;
padding: 10px;
font-family: Verdana, Geneva, Tahoma, sans-serif;
`

export const CriarNovaViagem = () => {
