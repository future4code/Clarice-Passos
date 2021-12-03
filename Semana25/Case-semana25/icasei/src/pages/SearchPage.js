import React, { useEffect } from "react";
import { BASE_URL } from "../constants/url";
import axios from 'axios'
import { useState } from "react";
import { useHistory } from "react-router";
import { useParams } from "react-router";
import styled from "styled-components";

const Button = styled.button`
  background: "palevioletred";
  color:  "white";
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const Input = styled.input`
  padding: 0.5em;
  font-size: 1em;
  margin: 0.5em;
  color: "palevioletred";
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

const Wrapper = styled.div`
  padding: 4em;
  border: black solid 1px;
  width: 500px;
  background: papayawhip;
  margin-left: auto;
  margin-right: auto;

`;

export const SearchPage = () => {
    const [videoName, setVideoName] = useState([])
    const [searchTerm, setSeachTerm] = useState('')
    const history = useHistory()
    const  id  = useParams()


    const getResults = () => {

        const token = 'key=AIzaSyDHShX3S_tM38BKR-pVaWRh1eU20e-4p50'
        const part = 'search?part=snippet&'
        const query = `q=${searchTerm}&`
        const maxResults = 'maxResults=9&'
        const type = 'type=video&'

        axios
            .get(`${BASE_URL}${part}${query}${maxResults}${type}${token}`)
            .then((res) => {
                setVideoName(res.data.items)
                console.log(res.data.items)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }

    useEffect(() => {
        getResults();
    }, [])

    const handleFormChange = (event) => {
        setSeachTerm(event.target.value)
    }

    const cleanFields = () => {
        setSeachTerm('')
    }

    const sendForm = (event) => {
        event.preventDefault()
        console.log('formulario enviado', searchTerm)
        cleanFields()
    }

    const goToDetailPage = (id) => {
        history.push(`/video/${id}`)
    }


    return (
        <div>
            <form onSubmit={sendForm}>
                <Input
                    type={"text"}
                    value={searchTerm}
                    onChange={handleFormChange}
                    placeholder={'Termo buscado'}></Input>
                <Button onClick={() => getResults()}>Pesquisar</Button>
            </form>
            <div>
                {videoName.map((i) => {
                    return <Wrapper key={i.videoId}>
                        <img src={i.snippet.thumbnails.medium.url} />
                        <h4 onClick={()=>goToDetailPage (i.id.videoId)}><b>Título:</b>{i.snippet.title}</h4>
                        <p><b>Canal:</b>{i.snippet.channelTitle}</p>
                        <p><b>Descrição:</b>{i.snippet.description} </p>                        
                    </Wrapper>
                })
                }
            </div>

        </div>

    )
}