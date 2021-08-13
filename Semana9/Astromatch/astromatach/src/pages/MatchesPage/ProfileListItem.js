import styled from "styled-components"
import React from "react"

const ListItemConteiner = styled.div`
height: 30px;
border: solid 1px black;
padding: 10px;
margin: 10px;
width: 400px;
justify-content: space-between;
align-items: center;
`

const RoundImage = styled.img`
width: 60px;
height: 60px;
border-radius: 30px;
margin-right: 20px;
`



export const ProfileListItem = (props) =>{
    return(
        <ListItemConteiner key={props.profile.id}>
            <RoundImage src={props.profile.photo}/>
            <h2>{props.profile.name}</h2>
        </ListItemConteiner>
    )
}