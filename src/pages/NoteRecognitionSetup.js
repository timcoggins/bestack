import PageContainer from "../components/atoms/PageContainer"
import H1 from "../components/atoms/H1"
import P from "../components/atoms/P"
import Select from '../components/atoms/'

const NoteRecognitionSetup = () => {
    return (
        <PageContainer>
            <H1>Note Recogntion Setup</H1>
            <P>Choose a game below</P>
            <Select>
                <option>Piano</option>
                <option>Trumpet</option>
                <option>Guitar</option>
            </Select>
        </PageContainer>
    )


}

export default NoteRecognitionSetup