import Grid from "@mui/material/Grid";
import { cards } from "../data/cards";
import { useEffect, useState } from "react";
import CardGame from "./CardGame";
import cardService, { type Card } from "../services/cardService";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";

function GameBoard() {
  const [matchedCards, SetmatchedCards] = useState<string[]>([]);
  const [selectedcards, SetselectedCards] = useState<string[]>([]);
  const [newCards, SetnewCards] = useState<Card[]>([]);

  const [seconds, setSeconds] = useState(0);
  const [isTimerActive, setIsTimerActive] = useState(true);

  const handleRestart = () => {
    const newCard = cardService(cards);
    SetnewCards(newCard);
    SetselectedCards([]);
    SetmatchedCards([]);
    setSeconds(0);
    setIsTimerActive(true);
  };

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
    let timer: ReturnType<typeof setInterval>;
    if (isTimerActive) {
      timer = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isTimerActive]);

  useEffect(() => {
    if (matchedCards.length === newCards.length && newCards.length > 0) {
      setIsTimerActive(false);
      console.log("done")
    }
  }, [matchedCards, newCards]);

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
    <Box
      sx={{
        backgroundColor: "#f0f2f5",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 2,
      }}
    >
      <Button
        variant="contained"
        color="primary"
        onClick={handleRestart}
        sx={{ mb: 3 }}
      >
        Restart
      </Button>

      <Typography variant="h6" sx={{ mb: 2 }}>
        Time: {seconds} seconds
      </Typography>

      <Grid container spacing="20px" justifyContent="center">
        {newCards.map((card) => (
          <Grid size={{ xs: 6, md: 3, sm: 4 }} key={card.id}>
            <CardGame
              onHandleClick={() => handleCardClick(card.id)}
              icon={card.icon}
              isFlipped={
                selectedcards.includes(card.id) ||
                matchedCards.includes(card.id)
              }
              isMatched={matchedCards.includes(card.id)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default GameBoard;
