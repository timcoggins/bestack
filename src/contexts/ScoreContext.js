import { createContext, useState } from "react";
/* import Game from '../assets/GameList'; */

const ScoreListContext = createContext()

const ScoreListContextProvider = ({children}) => {
    const [scoreList, setScoreList] = useState([{
        gameId: '1',
        ScoreInPc: 0
        
    }]);
    
    const [ noteSettings, setNoteSettings] = useState({
        selectedInstrument: '1',
        difficulty: 'easy',
        numberOfQuestions: 2
    })

    const [ instrumentSettings, setInstrumentSettings] = useState({
        difficulty: 'easy',
        numberOfQuestions: 2
    })

    return (
        <ScoreListContext.Provider value={{
            scoreList: scoreList,
            setScoreList: setScoreList,
            noteSettings: noteSettings,
            setNoteSettings: setNoteSettings,
            instrumentSettings: instrumentSettings,
            setInstrumentSettings: setInstrumentSettings
        }}>
            {children}
        </ScoreListContext.Provider>
    )

}

export default ScoreListContext;
export { ScoreListContextProvider };