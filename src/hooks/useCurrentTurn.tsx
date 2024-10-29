import { useRef, useState } from "react";
import { ITurn } from "../interfaces";

export const useCurrentTurn = () => {

    const [currentTurn, setCurrentTurn] = useState<ITurn>(ITurn.one);

    const timeRef = useRef(0)

    const changeTurn = () => {

        timeRef.current = setTimeout(() => setCurrentTurn(prev => prev === ITurn.one ? ITurn.two : ITurn.one), 1500)
    }


    return { currentTurn, timeRef, changeTurn }

}