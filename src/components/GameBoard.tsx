import Grid from "@mui/material/Grid";
import { cards } from "../data/cards";
import React, { useEffect, useState } from "react";
import CardGame from "./CardGame";
import cardService, { type Card } from "../services/cardService";

function GameBoard() {
  const [matchedCards, SetmatchedCards] = useState<string[]>([]);
  const [selectedcards, SetselectedCards] = useState<string[]>([]);
  const [newCards, SetnewCards] = useState<Card[]>([]);

  const handleCardClick = (id: string) => {
    if (
      selectedcards.length === 2 ||
      selectedcards.includes(id) ||
      matchedCards.includes(id)
    )
      return;

    const newSelected = [...selectedcards, id];
    SetselectedCards(newSelected);
  };

  useEffect(() => {
    const newCard = cardService(cards);
    SetnewCards(newCard);
  }, []);

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

  useEffect(() => {
    if (selectedcards.length === 2) {
      const [firstId, secondId] = selectedcards;
      const firstCard = newCards.find((card) => card.id === firstId);
      const secondCard = newCards.find((card) => card.id === secondId);

      if (!firstCard || !secondCard) return;

      if (firstCard?.pairId === secondCard?.pairId)
        SetmatchedCards((prev) => [...prev, firstId, secondId]);
    }
  }, [selectedcards, newCards]);

  return (
    <Grid container spacing={2}>
      {newCards.map((card) => (
        <Grid size={{ xs: 4, md: 3, sm: 4 }} key={card.id}>
          <CardGame
            onHandleClick={() => handleCardClick(card.id)}
            icon={card.icon}
            isFlipped={
              selectedcards.includes(card.id) || matchedCards.includes(card.id)
            }
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default GameBoard;
