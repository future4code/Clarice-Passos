import React from "react"
import useProtectedPage from "../../hooks/useProtectedPage";
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import { Typography } from "@material-ui/core";
import useForm from "../../hooks/useForm"
import TextField from "@material-ui/core/TextField"
import { useParams } from "react-router";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";

export const CommentConteiner = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100vw;
margin-top: 10vh;
`

export const InputsConteiner = styled.div`
display: flex;
flex-direction: column;
width: 80vw;
max-width: 450px;
align-items: center;
margin-bottom: 20px;
`

export const LoginFormConteiner = styled.div`
display: flex;
flex-direction: column;
width: 80vw;
max-width: 450px;
align-items: center;
margin-bottom: 20px;
`

export const SignUpButtonConteiner = styled.div`
width: 80vw;
max-width: 450px;
`

const CreateComment = () => {
  const [form, onChange] = useForm({body: "" })

  useProtectedPage()
  
  const params = useParams()
  
  const onSubmitForm = (event) => {
    event.preventDefault()
 
    const body = {
      body: form.body
    }
  
  axios.post(`${BASE_URL}/posts/${params.id}/comments`, body, {
    headers:
    {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem("token")
    }
  })


    .then((res) => {
      console.log(res.data.message)
    })

    .catch((err) => {
      console.log(err.response.message)
    })
  }

  return (
    <CommentConteiner>
      <h2>Post</h2>
      <form onSubmit={onSubmitForm} />
      <TextField
        name={"body"}
        value={form.body}
        onChange={onChange}
        label={"comentário"}
        variant="outlined"
        color="primary"
        fullWidth
        required
        autoFocus
        align={"center"}
        margin={"normal"}
      />

      <Typography gutterBottom variant={'h4'} align={'center'} colot={'textPrimary'} />
      <Button onClick={onSubmitForm} type={"submit"}
        variant="contained"
        color="primary"
        fullWidth
        align={"center"}
        margin={"normal"}
      >Enviar
      </Button>
    </CommentConteiner>
  )
}

export default CreateComment