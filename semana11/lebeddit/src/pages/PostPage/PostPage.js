import React from "react"
import useProtectedPage from "../../hooks/useProtectedPage";
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import { Typography } from "@material-ui/core";
import useForm from "../../hooks/useForm"
import TextField from "@material-ui/core/TextField"
import createPost from "../../services/posts"
import { CommentConteiner } from "./CreateComment";

export const ScreenConteiner = styled.div`
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

const PostPage = () => {
  const [form, onChange, clear] = useForm({ title: "", body: "" })

  
  const onSubmitForm = (event) => {
    event.preventDefault()
    createPost(form, clear) 
  }

  useProtectedPage()
  
  return (
    <div>
  
      <h2>Post</h2>
      <form onSubmit={onSubmitForm} />
      <TextField
        name={"title"}
        value={form.title}
        onChange={onChange}
        label={"título"}
        variant="outlined"
        color="primary"
        fullWidth
        required
        autoFocus
        align={"center"}
        margin={"normal"}
      />

      <TextField
        name={"body"}
        value={form.body}
        onChange={onChange}
        label={"texto"}
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
      <CommentConteiner></CommentConteiner>
    </div>
  )
}

export default PostPage;