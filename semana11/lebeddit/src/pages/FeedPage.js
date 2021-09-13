import React from "react"
import useProtectedPage from "../hooks/useProtectedPage";
import UseRequestData from "../hooks/useRequestData";
import { BASE_URL } from "../constants/urls"
import styled from "styled-components";
import { goToDetailPage } from "../routes/coordinator";
import { useHistory } from "react-router-dom";
import { Typography } from "@material-ui/core";
import PostCard from "../components/PostCard";


const FeedCard = styled.div`
border: black solid 1px;
height: 250px;
padding: 10px;
margin: 10px;
display: flex;
flex-direction: column;
margin-left: auto;
margin-right: auto;
cursor: pointer;
`

const Conteiner = styled.div`
display: flex;
flex-direction: column;
align-content: center;
justify-content: center;
margin-left: auto;
margin-right: auto;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-size: 30px;
width: 450px;
gap: 20px;
h3{
  text-align: center;
}
`

const FeedPage = () => {
  useProtectedPage()

  
  const feed = UseRequestData ([], `${BASE_URL}/posts`)

  const feedCard = feed.map((post) =>{
      return (<PostCard post={post} />)
  })

  return(
    
      <Conteiner>
        <h3>Feed</h3>
        {feedCard}
    </Conteiner>
  )
}

export default FeedPage;
