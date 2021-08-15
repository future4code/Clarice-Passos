import React, { useState } from "react"
import axios from "axios"
import { useEffect } from "react"
import {Conteiner, Profile, CardUsuario, Emoji} from "./styled"
import Button from '@material-ui/core/Button'


export const HomePage = () => {
    const [profile, setProfile] = useState ({})



    const url = 
    "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/clarice-passos-lovelace/person"

    const getProfile = () =>{
        axios.get(url)
            .then((res) => {
                setProfile(res.data.profile)
            })
            .catch((error) =>{
                console.log(error.response)
            })
    }

    useEffect (() =>  {
        getProfile()
    }, [])


    const choosePerson =() =>{
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/clarice-passos-lovelace/choose-person"

        const body = {
            "id": profile.id,
            "choice": true
        }
        
          axios.post(url, body 
            , {
            headers : {
                'Content-Type': 'application/json'}
          })

          .then((res) => {
              setProfile(res.data.profile)
              console.log("ok")
              getProfile()
          }) 

          .catch((err) =>{
              console.log(err.response)
          }) 
    }



    return (
        <Conteiner>
                 {!profile ? <div>Acabaram os perfis </div> : 
            <CardUsuario>
                <Profile src={profile.photo}/>
                <b><h2>{profile.name}, {profile.age}</h2></b>
                <p>{profile.bio}</p>
            </CardUsuario>
                }
            <Emoji>
        <Button variant="contained" color="#ECDCC9" onClick={choosePerson}>❤️</Button>
        <Button variant="contained" color="#ECDCC9" onClick={getProfile}>❌</Button>
        
            </Emoji>
                
        </Conteiner>
            
    )
    }

    