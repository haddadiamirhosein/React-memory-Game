
export interface Card {
    id : string;
    icon : string;
}


const cardService  = (Items : Card[]) : Card[] => {
    
    const duplicatedCards = Items.flatMap((item) => [
        {id : crypto.randomUUID() , icon : item.icon},
        {id : crypto.randomUUID() , icon : item.icon},
    ])
    
    const finalCard = duplicatedCards.sort(() => Math.random() - 0.5)
    return finalCard
}

export default cardService