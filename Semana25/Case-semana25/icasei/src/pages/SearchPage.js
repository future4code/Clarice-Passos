import React, { useEffect } from "react";
import { BASE_URL } from "../constants/url";
import axios from 'axios'
import { useState } from "react";
import { useHistory } from "react-router";
import { useParams } from "react-router";
import styled from "styled-components";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const Button1 = styled.button`
  background: "palevioletred";
  color:  "white";
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  margin-left: 5px;
  height: 33px;
`;

const Input = styled.input`
  padding: 0.5em;
  font-size: 1em;
  margin: 0.5em;
  color: "palevioletred";
  background: papayawhip;
  border: none;
  border-radius: 3px;
  margin-right: auto;
  margin-left: auto;
`;

const Wrapper = styled.div`
  margin-left: 500px;
`;

const Form = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 10px;
margin: 10px
`

export const SearchPage = () => {
    const [videoName, setVideoName] = useState([])
    const [searchTerm, setSeachTerm] = useState('')
    const history = useHistory()
    const id = useParams()


    const getResults = () => {

        const token = 'key=AIzaSyBYAOscx9jRqH2Rsj-SkNhjLTn-e4GaCZ8'
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
            <Form>
            <form onSubmit={sendForm}>
                <Input
                    type={"text"}
                    value={searchTerm}
                    onChange={handleFormChange}
                    placeholder={'Termo buscado'}></Input>
                <Button1 onClick={() => getResults()}>Pesquisar</Button1>
            </form>
            </Form>
            <Wrapper>
                {videoName.map((i) => {
                    return <Card key={i.videoId} sx={{ maxWidth: 500, margin: 3 }}>
                        <CardMedia
                              component="img"
                              height="200"
                              image={i.snippet.thumbnails.medium.url}
                              alt="green iguana" />
                        <Typography gutterBottom variant="h5" component="div"
                            onClick={() => goToDetailPage(i.id.videoId)}>
                            {i.snippet.title}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div"><b>Canal:</b>{i.snippet.channelTitle}</Typography>
                        <Typography variant="body1" color="text.secondary">
                            <b>Descrição:</b>{i.snippet.description} </Typography>
                    </Card>
                   
                })
                }
            </Wrapper>

        </div>

    )
}