import { createContext, useState } from "react";
/* import Game from '../assets/GameList'; */

const ScoreListContext = createContext()

const ScoreListContextProvider = ({children}) => {
    const [scoreList, setScoreList] = useState([{
        gameId: '1',
        selectedInstrument: '1',
        difficultyLevel: 'easy',
        questNb: 10,
        ScoreInPc: 0
        
    }]);

    const [ instrumentSettings, setInstrumentSettings] = useState({
        difficulty: 'easy'
    })

    return (
        <ScoreListContext.Provider value={{
            scoreList: scoreList,
            setScoreList: setScoreList,
            instrumentSettings: instrumentSettings,
            setInstrumentSettings: setInstrumentSettings
        }}>
            {children}
        </ScoreListContext.Provider>
    )

}

export default ScoreListContext;
export { ScoreListContextProvider };