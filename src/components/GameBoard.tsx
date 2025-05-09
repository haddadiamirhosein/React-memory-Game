import Grid from '@mui/material/Grid'
import { cards } from '../data/cards'
import React, { useEffect, useState } from 'react'
import CardGame from './CardGame'
import cardService, { type Card } from '../services/cardService'



function GameBoard() {

    const [selectedcards , SetselectedCards] = useState<string[]>([])
    const [newCards , SetnewCards] = useState<Card[]>([])

    const handleCardClick = (id:string) => {
        
        if (selectedcards.length === 2 || selectedcards.includes(id))
            return
        
        const newSelected = [...selectedcards , id]
        SetselectedCards(newSelected)
    }

    useEffect(() =>{
      const newCard = cardService(cards);
      SetnewCards(newCard)
    },[])

    useEffect(() => {

        if (selectedcards.length === 1) {
          const timeout = setTimeout(() => {
            SetselectedCards([]);
          }, 5000);
          return () => clearTimeout(timeout);
        }
      
        if (selectedcards.length === 2) {
          const timeout = setTimeout(() => {
            SetselectedCards([]);
          }, 1000);
          return () => clearTimeout(timeout);
        }

      }, [selectedcards]);

  return (
<Grid container spacing={2} >
  {newCards.map(card =>(
     <Grid size={{ xs: 4, md: 3 , sm:4}} key={card.id}>
        <CardGame 
            onHandleClick={() => handleCardClick(card.id)} 
            icon={card.icon} 
            isFlipped={selectedcards.includes(card.id)}
        />
    </Grid>
  ))}
</Grid>
  )
}

export default GameBoard  