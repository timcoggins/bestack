/**
 * NoteRecognition.js
 */
import { useState, useContext, useEffect } from 'react'
import generateRandomNote from '../utils/generateRandomNote';
import ScoreListContext from "../contexts/ScoreContext"

import PageContainer from "../components/atoms/PageContainer"
import H1 from "../components/atoms/H1"
import P from "../components/atoms/P"
import Button from "../components/atoms/Button"
import SheetMusic from 'react-sheet-music';

/**
 * NoteRecognition
 * @returns {JSX.Element}
 */
const NoteRecognition = () => {

    // Consume context
    const { scoreList, setScoreList } = useContext(ScoreListContext);

    // State variables
    const [ note, setNote ] = useState(`${generateRandomNote('easy', 'piano')}`);
    const [ msg, setMsg ] = useState('');
    const [ score, setScore ] = useState(0);
    const [ questCount, setQuestCount ] = useState(0);

    /**
     * Check user choice
     * @param input
     */
    const checkNote = (input) => {
        if(input === note) {
            setMsg('Correct!')
            setScore(score + 1)
        } else {
            setMsg('Incorrect')
        }
        setQuestCount(questCount + 1)
    }

    useEffect(() => {
        if(questCount >= scoreList.questNb) {
/*             const newScoreList = scoreList.slice();
            newScoreList.push(tmpScore);
            setScoreList(newScoreList); */
        }
    }, [questCount])

    // JSX
    return (
        <PageContainer>
            <H1>Note Recognition</H1>
            <P>Go ahead, try to identify the notes!</P>
            <SheetMusic
                notation={`${note}4`}
            />
            <Button onClick={() => checkNote('C')}>C</Button>
            <Button onClick={() => checkNote('D')}>D</Button>
            <Button onClick={() => checkNote('E')}>E</Button>
            <Button onClick={() => checkNote('F')}>F</Button>
            <Button onClick={() => checkNote('G')}>G</Button>
            <Button onClick={() => checkNote('A')}>A</Button>
            <Button onClick={() => checkNote('B')}>B</Button>

            {msg ? <p>{msg}</p> : <p>Choose a note</p>}

            <Button onClick={() => {
                setNote(`${generateRandomNote('easy', 'piano')}`);
                setMsg('')
            }}>Next Note</Button>
            <P>Score: {score}</P>
        </PageContainer>
    )
}

export default NoteRecognition