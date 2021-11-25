import PageContainer from "../components/atoms/PageContainer";
import H1 from "../components/atoms/H1"
import P from "../components/atoms/P"
import { Link } from 'react-router-dom';
import GameSelector from "../components/molecules/GameSelector";
import Button from "../components/atoms/Button";

const Home = (props) => {
    return (
        <PageContainer>
            <H1>Welcome To the game</H1>
            <P>Choose a game below</P>
            <Link to='/noterecognitionsetup'><GameSelector title={'Note Recoginiton'}/></Link>
            <Link to='/instrumentrecognitionsetup'><GameSelector title={'Instrument Recoginiton'}/></Link>
            <P>See your results</P>
            <Link to='/results'><Button>Results</Button></Link>

        </PageContainer>
    )
}

export default Home