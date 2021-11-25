/**
 * InstrumentRecognitionSetup
 * Game options
 */

import { Link } from 'react-router-dom'

import { useContext } from 'react'
import ScoreListContext from '../contexts/ScoreContext'

import ChooseNbQuest from '../components/molecules/ChooseNbQuest';

import StyledLink from '../components/atoms/StyledLink';
import PageContainer from "../components/atoms/PageContainer"
import H1 from "../components/atoms/H1"
import P from "../components/atoms/P"
import Select from '../components/atoms/Select'
import Button from "../components/atoms/Button"
import Input from "../components/atoms/Input"

/**
 * InstrumentRecognitionSetup
 * @returns {JSX.Element}
 */
const InstrumentRecognitionSetup = () => {

    const { instrumentSettings, setInstrumentSettings } = useContext(ScoreListContext);
    console.log(instrumentSettings.numberOfQuestions)
    /**
     * HandleChange
     * @param {*} e 
     */
    const handleChange = (e) => setInstrumentSettings({...instrumentSettings, difficulty: e.target.value});

    /**
     * Handle when the user changes the number of questions
     */
    const handleQuestionsChange = (e) => setInstrumentSettings({...instrumentSettings, numberOfQuestions: parseInt(e.target.value)});

    return (
        <PageContainer>
            <H1>Instrument Recogntion Setup</H1>
            <P>Choose an difficulty</P>
            <Select value={instrumentSettings.difficulty} onChange={(e) => handleChange(e)}>
                <option value='easy'>Easy</option>
                <option value='medium'>Medium</option>
                <option value='hard'>Hard</option>
            </Select>

            <ChooseNbQuest />
            
            <StyledLink to='/instrumentrecognition'><Button>Start Game</Button></StyledLink>
        </PageContainer>
    )
}

export default InstrumentRecognitionSetup