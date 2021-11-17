import styled from 'styled-components'
import { useHistory } from "react-router-dom"

export const Select = styled.select`
  grid-column: 2 / 3;
  height: 40px;
  padding: 10px;
  background-color: white;
  box-shadow: 2px 2px 2px #000000;
  border: 1px solid ;
  border-radius: 5px;
  color: black;
  font-size: 16px;
  outline: none;
  &:hover,
  &:focus {
    transition: 0.4s;
    border: 1px solid;
    transition: 0.2s;
  }
`;

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