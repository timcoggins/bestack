/**
 * NoteRecognition.js
 */
import { useState } from 'react'
import generateRandomNote from '../utils/generateRandomNote';

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

    // State variables
    const [ note, setNote ] = useState(`${generateRandomNote('easy', 'piano')}`)
    const [ msg, setMsg ] = useState('')
    const [ score, setScore ] = useState(0)

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
    }

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