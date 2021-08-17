import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { ProfileListItem } from "./ProfileListItem"
import axios from "axios"

const Conteiner = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 80vh;
width: 500px;
border: 1px solid black;
padding: 20px;
margin: 20px;
background-color: #EDD4B2;
`


export const MatchesPage = () => {
    const [matches, setMatches] = useState ([]);

    const getMatches = () =>{
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/clarice-passos-lovelace/matches"
          
        axios
           .get(url)

          .then((res) => {
              setMatches(res.data.matches)})

          .catch((err) =>{
              console.log(err.response)}) 
    }

    useEffect (() =>  {
        getMatches()
    }, [])

return (
        <Conteiner>
            {matches.map((profile) => {
                return <ProfileListItem profile={profile} />
            })}
        </Conteiner>
)
}
