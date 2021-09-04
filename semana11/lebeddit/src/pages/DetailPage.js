import React from "react";
import { useParams } from "react-router";
import { BASE_URL } from "../constants/urls";
import useProtectedPage from "../hooks/useProtectedPage";
import UseRequestData from "../hooks/useRequestData";
import styled from "styled-components";
import { Typography } from "@material-ui/core";

const Comentario = styled.div`
border: black solid 1px;
height: 250px;
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
align-items: center;
justify-content: center;
margin: 30px;
`

const DetailPage = () =>{
useProtectedPage()
const params = useParams()

const detail = UseRequestData([], `${BASE_URL}/posts/${params.id}/comments`)



const comment = detail.map((post) =>{
    return (<Comentario key={post.id}>
      <h3> {post.body}</h3> <h3>{post.username}</h3>
          <Typography>
            <p>❤️{post.voteSum}</p> 
          <p>💬{post.commentCount}</p>
          <p>{post.userVote}</p>
          </Typography>
          </Comentario>)
})

return(
    <Conteiner>
    {comment}
    </Conteiner>
)
}

export default DetailPage