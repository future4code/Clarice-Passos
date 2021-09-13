import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'
import {goToFeedPage, goToLogin} from '../routes/coordinator'
import { useHistory } from 'react-router-dom'

export const StyledTollBar = styled(Toolbar)`
display: flex;
flex-direction: row;
justify-content: space-between;
`
const Header = ({rightButtonText,setRightButtonText}) => {
  const token = localStorage.getItem("token")
    const history = useHistory()
   
    const logout = () =>{
      localStorage.removeItem("token")
    }

    const rightButtonAction = () =>{
      if (token){
        logout()
        setRightButtonText("Login")
        goToLogin(history)
      }else{
        goToLogin(history)
      }
    }

return(
      <AppBar position="static">
        <StyledTollBar>
        <Button onClick={()=>goToFeedPage(history)} color="inherit">LabEddit</Button>
        <Button onClick={rightButtonAction} color="inherit">{rightButtonText}</Button>
        </StyledTollBar>
      </AppBar>
)
}

export default Header;