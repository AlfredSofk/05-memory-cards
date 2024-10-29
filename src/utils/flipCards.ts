import { ICard } from "../interfaces"

export const flipCards = (cards: Array<ICard>, cardId: number) => {

    return cards.map(card => {
        if (card.id === cardId) {
            return { ...card, flipped: !card.flipped }
        }

        return card
    })
}