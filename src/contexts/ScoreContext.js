import { createContext, useState } from "react";
/* import Game from '../assets/GameList'; */

const ScoreListContext = createContext()

const ScoreListContextProvider = ({children}) => {
    const [scoreList, setScoreList] = useState([
        /* {
            gameId: '1',
            scoreInPc: 0        
        } */
    ]);
    
    const [ noteSettings, setNoteSettings] = useState({
        selectedInstrument: '1',
        difficulty: 'easy',
        numberOfQuestions: 5
    });

    const [ instrumentSettings, setInstrumentSettings] = useState({
        difficulty: 'easy',
        numberOfQuestions: 5
    });

    const [ gem, setGem ] = useState(0);

    return (
        <ScoreListContext.Provider value={{
            scoreList: scoreList,
            setScoreList: setScoreList,
            noteSettings: noteSettings,
            setNoteSettings: setNoteSettings,
            instrumentSettings: instrumentSettings,
            setInstrumentSettings: setInstrumentSettings,
            gem: gem,
            setGem: setGem
        }}>
            {children}
        </ScoreListContext.Provider>
    )

}

export default ScoreListContext;
export { ScoreListContextProvider };