import {FlipCardContainer, FlipCardInner, FlipCardFront, FlipCardBack} from "../styles/FlipCardStyles"
import CardFace from './CardFace';


interface Props{
  icon:string;
  isFlipped:boolean;
  onHandleClick : () => void;
}

function CardGame({icon , isFlipped , onHandleClick}:Props) {
  return (
    <FlipCardContainer onClick={onHandleClick}>
        <FlipCardInner isFlipped={isFlipped}>

          <FlipCardFront>

            <CardFace icon='❓' onClickitme={onHandleClick}/>

          </FlipCardFront>

          <FlipCardBack>
              
            <CardFace icon={icon} />

          </FlipCardBack>

        </FlipCardInner>
    </FlipCardContainer>
  )
}

export default CardGame