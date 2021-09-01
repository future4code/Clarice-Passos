import React from "react"
import Button from '@material-ui/core/Button';
import styled from "styled-components";
import { TextField } from "@material-ui/core";
import useForm from "../hooks/useForm";
import { SignUpPage } from "../routes/coordinator";
import { useHistory } from "react-router";
import useUnprotectedPage from "../hooks/useUnprotectedPage";
import { doSignUp } from "../services/users";


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


const SignUp = () => {
  const [form, onChange, clear] = useForm({ username: "", email: "", password: "" })
  const history = useHistory()

  const onSubmitForm = (event) => {
    event.preventDefault()
    doSignUp(form, clear, history)
  }

  useUnprotectedPage()

  return (
    <ScreenConteiner>
      <h2>Cadastra-se</h2>
      <InputsConteiner>
        <form onSubmit={onSubmitForm}>
        <TextField
            name={"username"}
            value={form.username}
            onChange={onChange}
            label={"username"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
          />

          <TextField
            name={"email"}
            value={form.email}
            onChange={onChange}
            label={"emaill"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"email"}
          />

          <TextField
            name={"password"}
            value={form.password}
            onChange={onChange}
            label={"senha"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"password"}
          />

          <Button type={"submit"}
            variant="contained"
            color="primary"
            fullWidth
            margin={"normal"}
            >Cadastra-se
          </Button>

        </form>
      </InputsConteiner>
    
    </ScreenConteiner>
  )
}

export default SignUp;