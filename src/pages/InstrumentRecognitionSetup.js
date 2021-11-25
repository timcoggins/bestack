/**
 * InstrumentRecognitionSetup
 * Game options
 */

import { useContext } from 'react'
import ScoreListContext from '../contexts/ScoreContext'
import { Link } from 'react-router-dom'
import StyledLink from '../components/atoms/StyledLink';
import PageContainer from "../components/atoms/PageContainer"
import H1 from "../components/atoms/H1"
import P from "../components/atoms/P"
import Select from '../components/atoms/Select'
import Button from "../components/atoms/Button"

/**
 * InstrumentRecognitionSetup
 * @returns {JSX.Element}
 */
const InstrumentRecognitionSetup = () => {

    const { instrumentSettings, setInstrumentSettings } = useContext(ScoreListContext);

    /**
     * HandleChange
     * @param {*} e 
     */
    const handleChange = (e) => setInstrumentSettings({...instrumentSettings, difficulty: e.target.value});


    return (
        <PageContainer>
            <H1>Instrument Recogntion Setup</H1>
            <P>Choose an difficulty</P>
            <Select value={instrumentSettings.difficulty} onChange={(e) => handleChange(e)}>
                <option value='easy'>Easy</option>
                <option value='medium'>Medium</option>
                <option value='difficult'>Difficult</option>
                <option value='expert'>Expert</option>
            </Select>
            <StyledLink to='/instrumentrecognition'><Button>Start Game</Button></StyledLink>
        </PageContainer>
    )
}

export default InstrumentRecognitionSetup