import { useEffect, useRef, useState } from "react";
import { initialData } from "../utils/initCardData";
import { ITurn } from "../interfaces";

export const useGame = () => {
    const [currentTurn, setCurrentTurn] = useState<ITurn>(ITurn.one);
    const [scores, setScores] = useState({
        [ITurn.one]: 0,
        [ITurn.two]: 0
    })

    const countRef = useRef(1)
    const timeRef = useRef(0)

    const [cards, setCards] = useState(initialData)

    const chooseCard = (cardId: number) => {

        const newCards = cards.map(card => {
            if (card.id === cardId) {
                return { ...card, flipped: !card.flipped }
            }

            return card
        })

        setCards(newCards)

        if (countRef.current % 2 === 0) {
            const flippedCards = newCards.filter(card => card.flipped && !card.assert)
            console.log(flippedCards)

            if (flippedCards[0].icon.type.name === flippedCards[1].icon.type.name) {
                setCards(newCards.map(card => {
                    if (card.id === flippedCards[0].id || card.id === flippedCards[1].id) {
                        return { ...card, assert: true }
                    }

                    return card
                }))
                setScores(prevScores => ({ ...prevScores, [currentTurn]: prevScores[currentTurn] + 1 }))
            } else {
                timeRef.current = setTimeout(() => setCurrentTurn(prev => prev === ITurn.one ? ITurn.two : ITurn.one), 1500)
            }
        }

        countRef.current += 1
    }

    useEffect(() => {
        setCards(cards.map(card => {
            if (!card.assert) {
                return { ...card, flipped: false }
            }

            return card
        }))

        return () => clearInterval(timeRef.current)
    }, [currentTurn])


    return { currentTurn, scores, cards, chooseCard }

}