import React, { useState } from "react"
import axios from "axios"
import { useEffect } from "react"
import {Conteiner, Profile, CardUsuario, Emoji} from "./styled"



export const HomePage = () => {
    const [profile, setProfile] = useState ({})

    useEffect (() =>  {
        getProfile()
    }, [])

    const url = 
    "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${clarice-passos-lovelace}/person"

    const getProfile = () =>{
        axios.get(url)
            .then((res) => {
                setProfile(res.data.profile)
            })
            .catch((error) =>{
                console.log(error.response)
            })
    }

     


    const choosePerson =() =>{
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${clarice-passos-lovelace}/choose-person"

        const body = {
            "id": "profile.id",
            "choice": true
        }
        
          axios.post(url, body 
            , {
            headers : {
                'Content-Type': 'application/json'}
          })

          .then((res) => {
              setProfile(res.data)
              console.log("ok")
              getProfile()
          }) 
          .catch((err) =>{
              console.log(err.response)
          }) 
    }

    const limpar = () =>{
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/clarice-passos-lovelace/clear"
        const body = {
            "id": "profile.id"}
        axios.put(url, body 
            , {
            headers : {
                'Content-Type': 'application/json'}
              })
              .then((res) => {
                setProfile(res.data)
                console.log("certo")
                getProfile()
            }) 
            .catch((err) =>{
                console.log(err.response)
            }) 
    }

    return (
        <Conteiner>
            <CardUsuario>
                <Profile src={profile.photo}/>
                <b><h2>{profile.name}, {profile.age}</h2></b>
                <p>{profile.bio}</p>
            </CardUsuario>
            <Emoji>
        <button onClick={choosePerson}>❤️</button>
        <button onClick={getProfile}>❌</button>
        <button onClick={limpar}>Limpar</button>
            </Emoji>
        </Conteiner>
    
    )
    }

    