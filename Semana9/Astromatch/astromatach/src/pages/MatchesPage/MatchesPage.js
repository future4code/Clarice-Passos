import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { ProfileListItem } from "./ProfileListItem"
import axios from "axios"

const Conteiner = styled.div`
height: 500px;
width: 500px;
border: 1px solid black;
padding: 10px;
margin: 10px;`


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
