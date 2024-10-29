import { useGame } from "../../hooks"
import { TableBody } from "./TableBody"
import { TableHeader } from "./TableHeader"


export const Table = () => {
    const { currentTurn, scores, cards, chooseCard } = useGame()
    return (
        <>
            <TableHeader scores={scores} />
            <TableBody currentTurn={currentTurn} cards={cards} chooseCard={chooseCard} />
        </>
    )
}