/**
 * NoteRecognition.js
 */
import { useState, useContext, useEffect } from 'react'
import generateRandomNote from '../utils/generateRandomNote';
import ScoreListContext from "../contexts/ScoreContext";
import StyledLink from '../components/atoms/StyledLink';

import PageContainer from "../components/atoms/PageContainer";
import H1 from "../components/atoms/H1";
import P from "../components/atoms/P";
import Button from "../components/atoms/Button";
import SheetMusic from 'react-sheet-music';
import Controls from '../components/atoms/Controls'
import Center from '../components/atoms/Center'

/**
 * NoteRecognition
 * @returns {JSX.Element}
 */
const NoteRecognition = () => {

    // Consume context
    const { noteSettings, setNoteSettings, scoreList, setScoreList } = useContext(ScoreListContext);

    console.log(noteSettings);

    // State variables
    const [ note, setNote ] = useState(`${generateRandomNote('easy', 'piano')}`);
    const [ msg, setMsg ] = useState('');
    const [ score, setScore ] = useState(0);
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
    const [resultBtnDisabled, setResultBtnDisabled] = useState(true);
    const [ questCount, setQuestCount ] = useState(1);

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
        setNextBtnDisabled(false);
        console.log('questCount / NbOfQuest: ' + questCount + ' / ' + noteSettings.numberOfQuestions);
        if(questCount >= noteSettings.numberOfQuestions) {
            console.log("finished");
            const newScore = ({gameId: '1', scoreInPc: score / noteSettings.numberOfQuestions * 100});
            const newScoreList = scoreList.slice();
            newScoreList.push(newScore);
            setScoreList(newScoreList);
            setResultBtnDisabled(false);
        }
    }

    // JSX
    return (
        <PageContainer>
            <P>Go ahead, try to identify the notes!</P>
            <P>Score: {score}</P>

                <SheetMusic
                notation={`${note}4`}
                />

            <Controls grid style={{marginTop: '0'}}>
                <Button onClick={() => checkNote('C')}>C</Button>
                <Button onClick={() => checkNote('D')}>D</Button>
                <Button onClick={() => checkNote('E')}>E</Button>
                <Button onClick={() => checkNote('F')}>F</Button>
                <Button onClick={() => checkNote('G')}>G</Button>
                <Button onClick={() => checkNote('A')}>A</Button>
                <Button onClick={() => checkNote('B')}>B</Button>
            </Controls>


            {msg ? <p>{msg}</p> : ''}
            <Controls middle>
            <StyledLink to='/results' ><Button disabled={resultBtnDisabled}>Results</Button></StyledLink>
            <Button
                disabled={nextBtnDisabled}
                onClick={() => {
                    setNote(`${generateRandomNote('easy', 'piano')}`);
                    setMsg('');
                    setQuestCount(questCount + 1);
                }}
            >
                Next Note
            </Button>
            </Controls>
        </PageContainer>
    )
}

export default NoteRecognition