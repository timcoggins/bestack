import { createContext, useState } from "react";
/* import Game from '../assets/GameList'; */

const ScoreListContext = createContext()

const ScoreListContextProvider = ({children}) => {
    const [scoreList, setScoreList] = useState({
        gameNb: 0,
        gameId: 1,
        selectedInstrument: 1,
        difficultyLevel: 0,
        questNb: 10,
        ScoreInPc: 0
    });

    return (
        <ScoreListContext.Provider value={{
            scoreList: scoreList,
            setScoreList: setScoreList
        }}>
            {children}
        </ScoreListContext.Provider>
    )

}

export default ScoreListContext;
export { ScoreListContextProvider };