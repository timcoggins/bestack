/**
 * NoteRecognitionSetup.js
 */
// Imports
/* import { Link } from 'react-router-dom'; */
import StyledLink from '../components/atoms/StyledLink';
import { useContext } from 'react';
import ScoreListContext from "../contexts/ScoreContext"

import PageContainer from "../components/atoms/PageContainer";
import ChooseNbQuest from '../components/molecules/ChooseNbQuest';

import Instruments from "../assets/instrumentList";
import H1 from "../components/atoms/H1";
import P from "../components/atoms/P";
import Select from '../components/atoms/Select';
import Button from "../components/atoms/Button";
import Center from '../components/atoms/Center'

/**
 * NoteRecognitionSetup
 * @returns {JSX.Element}
 */
const NoteRecognitionSetup = () => {

    // Consume context
    const { noteSettings, setNoteSettings } = useContext(ScoreListContext);

    // For debugigns
/*     useEffect(() => {
        console.log(tmpScore);
    }, [tmpScore]); */

    // JSX
    return (
        <PageContainer>
            <H1>Note Recogntion Setup</H1>
            <P>Choose an instrument</P>
            <Select onChange={(e) => setNoteSettings({...noteSettings, selectedInstrument: e.target.value })} >                
                {
                    Instruments.map((instrument, index) => (
                        <option key={index} value={instrument.id}>{instrument.name}</option>
                    ))
                }
            </Select>

            <P>Choose an difficulty</P>
            <Select onChange={(e) => setNoteSettings({...noteSettings, difficulty: e.target.value })} >
                <option value={'easy'} >Easy</option>
                <option value={'medium'} >Medium</option>
                <option value={'hard'} >Hard</option>
            </Select>

            <ChooseNbQuest />

                <StyledLink to='/noterecognition'><Button style={{display: 'inline'}}>Start Game</Button></StyledLink>

        </PageContainer>
    )
}

export default NoteRecognitionSetup
