/**
 * NoteRecognitionSetup.js
 */
// Imports
/* import { Link } from 'react-router-dom'; */
import StyledLink from '../components/atoms/StyledLink';
import { useState, useContext, useEffect } from 'react';

import ScoreListContext from "../contexts/ScoreContext"
import PageContainer from "../components/atoms/PageContainer";
import Instruments from "../assets/instrumentList";
import H1 from "../components/atoms/H1";
import P from "../components/atoms/P";
import Select from '../components/atoms/Select';
import Input from '../components/atoms/Input';
import Button from "../components/atoms/Button";

/**
 * NoteRecognitionSetup
 * @returns {JSX.Element}
 */
const NoteRecognitionSetup = () => {

    // Consume context
    const { scoreList, setScoreList } = useContext(ScoreListContext);

    // Setup state
    const [tmpScore, setTmpScore] = useState({
        gameId: '1',
        selectedInstrument: '1',
        difficultyLevel: 'easy',
        questNb: 5,
        ScoreInPc: 0
    });

    /**
     * Handle the saving the values when the user clicks
     * @param e
     */
    const handleClick = (e) => {
        const newScoreList = scoreList.slice();
        newScoreList.push(tmpScore);
        setScoreList(newScoreList);
    }

    // For debugigns
/*     useEffect(() => {
        console.log(tmpScore);
    }, [tmpScore]); */

    // JSX
    return (
        <PageContainer>
            <H1>Note Recogntion Setup</H1>
            <P>Choose an instrument</P>
            <Select onChange={(e) => setTmpScore({...tmpScore, selectedInstrument: e.target.value })} >                
                {
                    Instruments.map((instrument, index) => (
                        <option key={index} value={instrument.id}>{instrument.name}</option>
                    ))
                }
            </Select>

            <P>Choose an difficulty</P>
            <Select onChange={(e) => setTmpScore({...tmpScore, difficultyLevel: e.target.value })} >
                <option value={'easy'} >Easy</option>
                <option value={'medium'} >Medium</option>
                <option value={'hard'} >Hard</option>
            </Select>

            <P>Decide how many questions to play</P>
            <Input
                type="number"
                min="1"
                max="10"
                onChange={(e) => setTmpScore({...tmpScore, questNb: parseInt(e.target.value, 10) })}
                value={tmpScore.questNb}
            />
     
            <StyledLink to='/noterecognition'><Button onClick={handleClick}>Start Game</Button></StyledLink>
        </PageContainer>
    )
}

export default NoteRecognitionSetup
