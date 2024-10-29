import { Card } from "../Card"
import { ICard } from '../../interfaces/cards';




interface Props {
    currentTurn: string,
    cards: Array<ICard>,
    chooseCard: (id: number) => void
}



export const TableBody = ({ currentTurn, cards, chooseCard }: Props) => {

    return (
        <>
            <h1>Turno: Jugador {currentTurn}</h1>
            <section className='cards'>
                {cards.map(card => <Card key={card.id} icon={card.icon} isFlipped={card.flipped} onClick={() => chooseCard(card.id)} />)}
            </section>
        </>
    )


}