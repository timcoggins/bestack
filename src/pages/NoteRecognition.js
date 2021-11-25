import { useState, useEffect } from 'react'
import PageContainer from "../components/atoms/PageContainer"
import H1 from "../components/atoms/H1"
import P from "../components/atoms/P"
import Button from "../components/atoms/Button"
import SheetMusic from 'react-sheet-music';
import generateRandomNote from '../utils/generateRandomNote';


const NoteRecognition = () => {
    const [ note, setNote ] = useState(`${generateRandomNote('easy', 'piano')}`)
    const [ msg, setMsg ] = useState('')
    
    useEffect(() => {
        setNote(`${generateRandomNote('easy', 'piano')}`)
    }, [])

    const checkNote = (input) => {
        if(input === note) {
            console.log('hello!')
            setMsg('Correct!')
        } else {
            setMsg('Incorrect')
        }
    }

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

        {msg && <p>{msg}</p>}

        <Button onClick={() => {
            setNote(`${generateRandomNote('easy', 'piano')}`);
            setMsg('')
        }}>Next Note</Button>
    </PageContainer>

)

}

export default NoteRecognition