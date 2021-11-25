import { Link } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import ScoreListContext from "../contexts/ScoreContext"
import PageContainer from "../components/atoms/PageContainer";
import Instruments from "../assets/instrumentList";
import H1 from "../components/atoms/H1";
import P from "../components/atoms/P";
import Select from '../components/atoms/Select';
import Button from "../components/atoms/Button";

const NoteRecognitionSetup = () => {

    const { scoreList, setScoreList } = useContext(ScoreListContext);
    
    const [tmpScore, setTmpScore] = useState({
        gameNb: 1,//Math.max.apply(Math, scoreList.map(function(o) { return o.gameNb; }) + 1),
        gameId: '1',
        selectedInstrument: '1',
        difficultyLevel: 'easy',
        questNb: 10,
        ScoreInPc: 0
    });
   
    const handleClick = (e) => {
        const newScoreList = scoreList.slice();
        newScoreList.push(tmpScore);
        setScoreList(newScoreList);
    }

    useEffect(() => {
        console.log(scoreList);
    }, [scoreList]);

    return (
        <PageContainer>
            <H1>Note Recogntion Setup</H1>
            <P>Choose an instrument</P>
            <Select onChange={(e) => setTmpScore({...tmpScore, selectedInstrument: e.target.value })} >                
                {
                    Instruments.map(instrument => (
                        <option key={instrument.id} value={instrument.id}>{instrument.name}</option>
                    ))
                }
            </Select>

            <P>Choose an difficulty</P>
            <Select onChange={(e) => setTmpScore({...tmpScore, difficultyLevel: e.target.value })}>
                <option value={'easy'} >Easy</option>
                <option value={'medium'} >Medium</option>
                <option value={'difficult'} >Difficult</option>
            </Select>
            <Link to='/noterecognition'><Button onClick={handleClick}>Start Game</Button></Link>
        </PageContainer>
    )
}

export default NoteRecognitionSetup