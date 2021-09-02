import React from "react"
import useProtectedPage from "../hooks/useProtectedPage";
import UseRequestData from "../hooks/useRequestData";
import { BASE_URL } from "../constants/urls"
import styled from "styled-components";

const FeedCard = styled.div`
border: black solid 1px;
height: 150px;
padding: 10px;
margin: 10px;
display: flex;
flex-direction: column;
margin-left: auto;
margin-right: auto;
width: 25%;
`

const FeedPage = () => {
  useProtectedPage()
  
  const feed = UseRequestData ([], `${BASE_URL}/posts`)

  const feedCard = feed.map((post) =>{
      return (<FeedCard key={post.id}>
        <h3>{post.body}</h3> <h3>{post.username}</h3></FeedCard>)
  })

  return(
    
      <div>
        <h3>Feed</h3>
        {feedCard}
    </div>
  )
}

export default FeedPage;
