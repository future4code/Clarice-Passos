import styled from 'styled-components'
import { useHistory } from "react-router-dom"
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

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
  };
  @media(max-width: 800px) {
    flex-direction: column;
    position: relative;
  };
`;

const NavBar = () => {

/*   const [loterias, setLoterias] = useState([])

  const getLoterias = () => {
    axios.get('https://brainn-api-loterias.herokuapp.com/api/v1/loterias')

      .then((res) => {
        setLoterias(res.data)
      }).catch((err) => {
        console.log(err)
      })
  }
  useEffect(() => {
    getLoterias()

  }, [])

 console.log(loterias)
 
 const renderLoterias = loterias.map((i) => {
    return <option key={i.id}>           
      {i.id} {i.nome.toUpperCase()}

      </option>
  }) */

  const history = useHistory()

  const onChangeInput = (event) => {
    history.push(event.target.value)
  }


  return (
    <div>

    <Select onChange={onChangeInput} >
      <option hidden>Selecione a loteria</option>
{/*       {renderLoterias}
 */}
      <option value={'/megasena'}>Megasena</option>
      <option value={'/timemania'}>Timemania</option>
      <option value={'/lotofacil'}>Lotofacil</option>
      <option value={'/lotomania'}>Lotomania</option>
      <option value={'/quina'}>Quina</option>
      <option value={'/diadesorte'}>Dia de Sorte</option>
    </Select>
    </div>
  )
}

export default NavBar