import React from "react"
import { useProtectedPage } from "../customHooks/UseProtectePage"
import { useForm } from '../customHooks/UseForm
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import styled from "styled-components";

const Conteiner = styled.div`
display: block;
flex-direction: column;
margin: 15px 0;
background-color: #ffe8d6;
height: 1000vh;
padding: 10px;
font-family: Verdana, Geneva, Tahoma, sans-serif;
`

export const CriarNovaViagem = () => {
    useProtectedPage()
      const [formulario, setFormulario] = useForm({
        name: '',
        planet: '',
        description: '',
        duration: ''
      })
    
      const history = useHistory()
    
    
      const onSubmitForm = (event) => {
        event.preventDefault()
      
    
        const body = {
          name: form.name,
          planet: form.planet,
          date: formattedDate,
          description: form.description,
          durationInDays: form.duration
        }
    
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/clarice-passos-lovelace/trips', body, {
          headers: {
            auth: window.localStorage.getItem('token')
          }
        }).then((response) => {
          history.push('/viagens')
        })
      }
      return <Conteiner>
        <PageTitle title={'Criar viagem'}/>
        <FormContainer onSubmit={onSubmitForm}>
          <TextField
            label={'Nome'} 
            onChange={onChangeInput}
            name={'name'}
            value={form['name']}
          />
          <TextField
            label={'Planeta'}
            onChange={onChangeInput}
            name={'planet'}
            value={form['planet']}
          />
          <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="dd/MM/yyyy"
              margin="normal"
              label="Data"
              value={date}
              onChange={date => setDate(date)}
            />
          <TextField
            label={'Descrição'}
            onChange={onChangeInput}
            name={'description'}
            value={form['description']}
          />
          <TextField
            label={'Duração em dias'} type={'number'}
            onChange={onChangeInput}
            name={'duration'}
            value={form['duration']}
          />
          <Button variant={'contained'} color={'primary'} type={'submit'}>Criar</Button>
        </FormContainer>
      </Conteiner>
    }
    