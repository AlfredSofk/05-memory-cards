import { Card } from "../Card"

interface CardsProps {
    id: number,
    icon: JSX
}

interface BasicProps {
    currentTurn: string,
    cards: 
}

export const TableBody = ({ currentTurn }: Props) => {

    return (
        <>
            <h1>Turno: Jugador {currentTurn}</h1>
            <section className='cards'>
                {cards.map(card => <Card key={card.id} icon={card.icon} isFlipped={card.flipped} onClick={() => chooseCard(card.id)} />)}
            </section>
        </>
    )


}