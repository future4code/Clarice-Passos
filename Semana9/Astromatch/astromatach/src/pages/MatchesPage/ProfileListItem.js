import styled from "styled-components"
import React from "react"

const ListItemConteiner = styled.div`
height: 50px;
border: solid 1px black;
margin: 8px;
width: 450px;
display: flex;
justify-content: center;
align-items: right;
padding: 4px;
:hover {
    background-color: rgba(0,0,0,0.1)};
`

const RoundImage = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
margin-right: 8px;
`
const Titulo = styled.div`
display: flex;
align-items: center;
justify-content: center;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-size: 20px;
font-weight: bold;
color: #4d243d;
`


export const ProfileListItem = (props) =>{
    return(
        <ListItemConteiner key={props.profile.id}>
            <RoundImage src={props.profile.photo}/>
            <Titulo>{props.profile.name}</Titulo>
        </ListItemConteiner>
    )
}