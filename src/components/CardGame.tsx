import {
  FlipCardContainer,
  FlipCardInner,
  FlipCardFront,
  FlipCardBack,
} from "../styles/FlipCardStyles";
import CardFace from "./CardFace";

interface Props {
  icon: string;
  isFlipped: boolean;
  isMatched: boolean;
  onHandleClick: () => void;
}

function CardGame({ icon, isFlipped, isMatched, onHandleClick }: Props) {
  return (
    <FlipCardContainer>
      <FlipCardInner isFlipped={isFlipped}>
        <FlipCardFront>
          <CardFace icon="❓" onClickitme={onHandleClick} />
        </FlipCardFront>

        <FlipCardBack isMatched={isMatched}>
          <CardFace icon={icon} />
        </FlipCardBack>
      </FlipCardInner>
    </FlipCardContainer>
  );
}

export default CardGame;
