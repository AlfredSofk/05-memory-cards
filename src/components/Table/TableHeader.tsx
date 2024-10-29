import { ITurn } from "../../interfaces"

interface Props {
    scores: Record<ITurn, number>
}

export const TableHeader = ({ scores }: Props) => {
    return (

        <div className='app__header'>
            <h2>Jugador uno: {scores[ITurn.one]}</h2>
            <h2>Jugador dos: {scores[ITurn.two]}</h2>
        </div>

    )
}