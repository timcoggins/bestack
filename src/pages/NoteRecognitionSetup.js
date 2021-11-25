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
import Controls from '../components/atoms/Controls'
import ChooseDifficulty from '../components/molecules/ChooseDifficulty';

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
            <H1>What's that Note?!</H1>

            <Controls>
            <P>Choose your instrument</P>
                <Select onChange={(e) => setNoteSettings({...noteSettings, selectedInstrument: e.target.value })} >
                    {
                        Instruments.map((instrument, index) => (
                            <option key={index} value={instrument.id}>{instrument.name}</option>
                        ))
                    }
                </Select>
            </Controls>

            <ChooseDifficulty  options={noteSettings} setOptions={setNoteSettings} />

            <ChooseNbQuest options={noteSettings} setOptions={setNoteSettings} />
            <Center>
                <StyledLink to='/noterecognition'><Button>Start!</Button></StyledLink>
            </Center>
        </PageContainer>
    )
}

export default NoteRecognitionSetup
