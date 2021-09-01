import React from 'react'
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

const Header = () => {
    const history = useHistory()
return(
      <AppBar position="static">
        <StyledTollBar>
        <Button onClick={()=>goToFeedPage(history)} color="inherit">LabEddit</Button>
        <Button onClick={()=>goToLogin(history)} color="inherit">Login</Button>
        </StyledTollBar>
      </AppBar>
)
}

export default Header;