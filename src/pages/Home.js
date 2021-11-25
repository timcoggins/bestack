/**
 * Home.js
 */

// Imports
import PageContainer from "../components/atoms/PageContainer";
import H1 from "../components/atoms/H1"
import P from "../components/atoms/P"
/* import { Link } from 'react-router-dom'; */
import StyledLink from '../components/atoms/StyledLink';
import GameSelector from "../components/molecules/GameSelector";
import Button from "../components/atoms/Button";

/**
 * Home Component
 * @param props
 * @returns {JSX.Element}
 */
const Home = (props) => {
    return (
        <PageContainer>
            <H1>Welcome To the game</H1>
            <P>Choose a game below</P>
            <StyledLink to='/noterecognitionsetup' ><GameSelector title={'Note Recoginiton'}/></StyledLink>
            <StyledLink to='/instrumentrecognitionsetup' ><GameSelector title={'Instrument Recoginiton'}/></StyledLink>
            <P>See your results</P>
            <StyledLink to='/results' ><Button>Results</Button></StyledLink>
        </PageContainer>
    )
}

export default Home