import styled from 'styled-components'
import { useHistory } from "react-router-dom"

const Select = styled.select`
width: 200px;
`

const NavBar = () => {

    const history = useHistory()

    const onChangeInput = (event) => {
        history.push(event.target.value)
    }

    return (

        <Select onChange={onChangeInput} >
            <option>Selecione a loteria</option>
            <option value={'/megasena'}>Megasena</option>
            <option value={'/timemania'}>Timemania</option>
            <option value={'/lotofacil'}>Lotofacil</option>
            <option value={'/lotomania'}>Lotomania</option>
            <option value={'/quina'}>Quina</option>
            <option value={'/diadesorte'}>Dia de Sorte</option>
        </Select>
    )
}

export default NavBar