import React from "react"
import styled
from "styled-components"
import { ProfileListItem } from "../../components/ProfileListItem"

const Conteiner = styled.div`
height: 500px;
width: 500px;
border: 1px solid black;
padding: 10px;
margin: 10px;`


export const MatchesPage = () =>{

return(
    <Conteiner>
        <ProfileListItem/>
    </Conteiner>
)

}


