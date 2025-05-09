import Grid from '@mui/material/Grid'
import { cards } from '../data/cards'
import React, { useEffect, useState } from 'react'
import CardGame from './CardGame'

function GameBoard() {

    const [selectedcards , SetselectedCards] = useState<number[]>([])

    const handleCardClick = (id:number) => {
        
        if (selectedcards.length === 2 || selectedcards.includes(id))
            return
        
        const newSelected = [...selectedcards , id]
        SetselectedCards(newSelected)
    }

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
  {cards.map(card =>(
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