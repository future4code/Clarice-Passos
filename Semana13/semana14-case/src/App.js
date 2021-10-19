import React from "react"
import styled from "styled-components"
import axios from "axios"
import { useEffect, } from "react"
import { useState } from "react"
import Button from '@mui/material/Button';



const Conteiner = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
margin-left: 50px;
cursor: pointer;
`

const Card = styled.div`
size: 80px;
`

const BackCard = styled.div`
size: 50px;

`

const App = () => {
  const [cards, setCards] = useState([]);
  const [pathCards, setPathCards] = useState([]);
  const [flipCard, setFlipCard] = useState(false)


  const getCards = () => {
    axios.get('tarot.json')
      .then((res) => {
        setCards(res.data.cards)
        setPathCards({ url: res.data.imagesUrl, cardsBack: res.data.imageBackCard })
      })
      .catch((err) => {
        console.log(err)
      })
  }


  const renderCards = cards && cards.map((i) => {
    return (
      <Card key={i.cards}>
        <h4>{i.name}</h4>
        <img src={`${pathCards.url}${i.image}`}></img>
      </Card>
    )
  })

  const array = cards;


  const turnCard = () => {
    setFlipCard(!flipCard)
    array.sort((a, b) => 0.5 - Math.random());
  }

  const showCard = (name) => {
    setFlipCard(!name)
    alert(name)
  }



  const renderCardsBack = cards && cards.map((i) => {
    return (
      <BackCard key={i.name} onClick={() => showCard(i.name) }>
        <img src={`${pathCards.cardsBack}`}></img>
      </BackCard>
    )
  })


  useEffect(() => {
    getCards()

  }, [])


  return (
    <div>
      <Button
        variant="contained"
        fullWidth 
        onClick={() => turnCard()}>Clique para jogar</Button>
      <Conteiner>
        {flipCard ? renderCardsBack : renderCards}
      </Conteiner>
    </div>

  );
}

export default App
