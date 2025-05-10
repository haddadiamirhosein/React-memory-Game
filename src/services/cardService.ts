export interface Card {
  id: string;
  icon: string;
  pairId: string;
}

const cardService = (Items: Card[]): Card[] => {
  const duplicatedCards = Items.flatMap((item) => {
    const pairId = crypto.randomUUID();
    return [
      { id: crypto.randomUUID(), icon: item.icon, pairId: pairId },
      { id: crypto.randomUUID(), icon: item.icon, pairId: pairId },
    ];
  });

  const finalCard = duplicatedCards.sort(() => Math.random() - 0.5);
  return finalCard;
};

export default cardService;
