import React from "react";
import { useParams } from "react-router";
import { BASE_URL } from "../constants/urls";
import useProtectedPage from "../hooks/useProtectedPage";
import UseRequestData from "../hooks/useRequestData";
import styled from "styled-components";

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
`

const DetailPage = () =>{
useProtectedPage()
const params = useParams()

const detail = UseRequestData([], `${BASE_URL}/posts/${params.id}/comments`)



const comment = detail.map((post) =>{
    return (<Comentario key={post.id}>
      <h3> {post.body}</h3> <h3>{post.username}</h3>
          <p>❤️{post.voteSum}</p> 
          <p>💬{post.commentCount}</p>
          <p>{post.userVote}</p>
          </Comentario>)
})

return(
    <div>
    {comment}
    </div>
)
}

export default DetailPage