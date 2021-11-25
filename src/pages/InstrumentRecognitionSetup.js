import { Link } from 'react-router-dom'
import PageContainer from "../components/atoms/PageContainer"
import H1 from "../components/atoms/H1"
import P from "../components/atoms/P"
import Select from '../components/atoms/Select'
import Button from "../components/atoms/Button"

const InstrumentRecognitionSetup = () => {
    return (
        <PageContainer>
            <H1>Instrument Recogntion Setup</H1>
            <P>Choose an difficulty</P>
            <Select>
                <option>Easy</option>
                <option>Medium</option>
                <option>Difficult</option>
                <option>Expert</option>
            </Select>
            <Link to='/instrumentrecognition'><Button>Start Game</Button></Link>
        </PageContainer>
    )
}

export default InstrumentRecognitionSetup