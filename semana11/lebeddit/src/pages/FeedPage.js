import React from "react"
import useProtectedPage from "../hooks/useProtectedPage";
import UseRequestData from "../hooks/useRequestData";
import { BASE_URL } from "../constants/urls"
import styled from "styled-components";
import { goToDetailPage } from "../routes/coordinator";
import { useHistory } from "react-router-dom";



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

const FeedPage = () => {
  useProtectedPage()

  const history = useHistory()

  const onClickCard = (id) =>{
    goToDetailPage(history, id)
  }
  
  const feed = UseRequestData ([], `${BASE_URL}/posts`)

  const feedCard = feed.map((post) =>{
      return (<FeedCard key={post.id} onClick={()=>onClickCard(post.id)}>
        <h3> {post.body}</h3> <h3>{post.username}</h3>
            <p>❤️{post.voteSum}</p> 
            <p>💬{post.commentCount}</p>
            <p>{post.userVote}</p>
            </FeedCard>)
  })

  return(
    
      <div>
        <h3>Feed</h3>
        {feedCard}
    </div>
  )
}

export default FeedPage;
