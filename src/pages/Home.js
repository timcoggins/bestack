/**
 * Home.js
 */

// Imports
import PageContainer from "../components/atoms/PageContainer";
/* import H1 from "../components/atoms/H1"; */
import P from "../components/atoms/P";
/* import { Link } from 'react-router-dom'; */
import StyledLink from '../components/atoms/StyledLink';
import GameSelector from "../components/molecules/GameSelector";
import Button from "../components/atoms/Button";
import Center from "../components/atoms/Center";

/**
 * Home Component
 * @param props
 * @returns {JSX.Element}
 */
const Home = (props) => {
    return (
        <PageContainer>
            {/* <H1>Train your Theory</H1> */}

            <P>Choose a game below to get started!</P>
            <StyledLink to='/noterecognitionsetup' ><GameSelector title={'What\'s that note?'} image={'./images/music-note.png'}/></StyledLink>
            <StyledLink to='/instrumentrecognitionsetup' ><GameSelector title={'What\'s that instrument?'} image={'./images/jingle.png'}/></StyledLink>
            <GameSelector title={'Intervals (Coming Soon)'} image={'./images/triangle.png'} disabled={true}/>
            <StyledLink to='/results' ><GameSelector title={'My Scores'} image={'./images/metronome.png'}/></StyledLink>
            {/*<Center>*/}
            {/*    <StyledLink to='/results' ><Button>Results</Button></StyledLink>*/}
            {/*</Center>*/}

        </PageContainer>
    )
}

export default Home