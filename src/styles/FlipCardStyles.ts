import { styled } from "@mui/material/styles";
import { Card } from "@mui/material";

export const FlipCardContainer = styled("div")(() => ({
  perspective: "1000px",
  width: "150px",
  height: "200px",
  cursor:"pointer",
}));

export const FlipCardInner = styled("div")(({ isFlipped }: { isFlipped: boolean }) => ({
  width: "100%",
  height: "100%",
  position: "relative",
  transformStyle: "preserve-3d",
  transition: "transform 0.6s",
  transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
}));

export const FlipCardFront = styled(Card)(() => ({
  width: "100%",
  height: "100%",
  position: "absolute",
  backfaceVisibility: "hidden",
}));

export const FlipCardBack = styled(Card)(() => ({
  width: "100%",
  height: "100%",
  position: "absolute",
  backfaceVisibility: "hidden",
  transform: "rotateY(180deg)",
  backgroundColor: "#f8b400",
}));
