import Grid from '@mui/material/Grid'
import { cards } from '../data/cards'
import React from 'react'
import CardGame from './CardGame'

function GameBoard() {
  return (
<Grid container spacing={2} >
  {cards.map(card =>(
     <Grid size={{ xs: 4, md: 3 , sm:4}} key={card.id}>
        <CardGame icon={card.icon} isFlipped={false}/>
    </Grid>
  ))}
</Grid>
  )
}

export default GameBoard