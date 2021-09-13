import React, { useState } from "react";
import { useParams } from "react-router";
import { BASE_URL } from "../constants/urls";
import useProtectedPage from "../hooks/useProtectedPage";
import UseRequestData from "../hooks/useRequestData";
import styled from "styled-components";
import { TextField, Typography } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import { goToFeedPage } from "../routes/coordinator";
import { useHistory } from "react-router";
import axios from "axios"
import { useEffect } from "react";

const Comentario = styled.div`
border: black solid 1px;
padding: 10px;
margin: 10px;
display: flex;
flex-direction: column;
margin-left: auto;
margin-right: auto;
width: 25%;
cursor: pointer;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
border-radius: 10px;
`

const Conteiner = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 30px;
`

const DetailPage = () =>{

useProtectedPage()
const params = useParams()

const detail = UseRequestData([], `${BASE_URL}/posts/${params.id}/comments`)

const history = useHistory()

const [newComment, setNewComment] = useState("")

const handleUptadeComment = (event) =>{
  setNewComment(event.target.value)
}


      const handleComment = (id) =>{

        const body = {
                    body : newComment
                      }
      
        axios.post(`${BASE_URL}/posts/${params.id}/comments`, body, {
          headers:
          {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem("token")
          }
        })
          .then((res) => {
            alert(res.data)
            setNewComment("")
          })
      
          .catch((err) => {
            alert(err.response.message)
          })
      }

const comment = detail.map((post) =>{
    return (<Comentario key={post.id}>
       <h2>{post.username}</h2> <p> {post.body}</p>
          <Typography>
          <p>♥{post.voteSum}</p> 
          <button>🡡{post.userVote}</button>
          <button>🡣{post.userVote}</button>
          </Typography>
          </Comentario>)
})

return(
    <Conteiner>
      <h2>Comentários</h2>
      <TextField
        placeholder={"Faça o seu comentário"}
        value={newComment}
        onChange={handleUptadeComment}
        />
        <Button onClick={handleComment}>Comentar</Button>

    {comment}
    <Button onClick={()=>goToFeedPage(history)} type={"submit"}
        variant="contained"
        color="primary"
        align={"center"}
        margin={"normal"}
      >Voltar
      </Button>
    </Conteiner>
)
}

export default DetailPage