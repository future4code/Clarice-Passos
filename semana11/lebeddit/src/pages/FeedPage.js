import React from "react"
import useProtectedPage from "../hooks/useProtectedPage";
import UseRequestData from "../hooks/useRequestData";
import { BASE_URL } from "../constants/urls"
import styled from "styled-components";
import { goToDetailPage } from "../routes/coordinator";
import { useHistory } from "react-router-dom";
import { Typography } from "@material-ui/core";



const FeedCard = styled.div`
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

const Conteiner = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 30px;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-size: 30px;
`

const FeedPage = () => {
  useProtectedPage()

  const history = useHistory()

  const onClickCard = (id) =>{
    goToDetailPage(history, id)
  }
  
  const feed = UseRequestData ([], `${BASE_URL}/posts`)

  const feedCard = feed.map((post) =>{
      return (<FeedCard key={post.id} onClick={()=>onClickCard(post.id)}>
         <Typography>
         <h3>{post.username}</h3>
         <hr/>
         <h3> {post.body}</h3> 
            <span>❤️{post.voteSum}</span> 
            <span>💬{post.commentCount}</span>
            <span> ⬆{post.userVote}⬇</span>
            </Typography>
            </FeedCard>)
  })

  return(
    
      <Conteiner>
        <h3>Feed</h3>
        {feedCard}
    </Conteiner>
  )
}

export default FeedPage;
