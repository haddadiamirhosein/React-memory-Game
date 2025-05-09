
export interface Card {
    id : string;
    icon : string;
    pairId : string;
}


const cardService  = (Items : Card[]) : Card[] => {

    const pairId = crypto.randomUUID()
    
    const duplicatedCards = Items.flatMap((item) => [
        {pairId , id : crypto.randomUUID() , icon : item.icon},
        {pairId , id : crypto.randomUUID() , icon : item.icon},
    ])
    
    const finalCard = duplicatedCards.sort(() => Math.random() - 0.5)
    return finalCard
}

export default cardService