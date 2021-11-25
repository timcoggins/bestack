import { Link } from 'react-router-dom';
import PageContainer from "../components/atoms/PageContainer";
import Instruments from "../assets/instrumentList";
import H1 from "../components/atoms/H1";
import P from "../components/atoms/P";
import Select from '../components/atoms/Select';
import Button from "../components/atoms/Button";

const NoteRecognitionSetup = () => {
    return (
        <PageContainer>
            <H1>Note Recogntion Setup</H1>
            <P>Choose an instrument</P>
            <Select>
                {
                    Instruments.map(instrument => {
                        return (
                            <option key={instrument.id}>{instrument.name}</option>
                        )
                    })
                }
            </Select>

            <P>Choose an difficulty</P>
            <Select>
                <option>Easy</option>
                <option>Medium</option>
                <option>Difficult</option>
            </Select>
            <Link to='/noterecognition'><Button>Start Game</Button></Link>
        </PageContainer>
    )
}

export default NoteRecognitionSetup