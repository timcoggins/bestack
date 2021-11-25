import PageContainer from "../components/atoms/PageContainer";
import H1 from "../components/atoms/H1"
import P from "../components/atoms/P"
import NavBar from "../components/molecules/NavBar";
import Footer from "../components/molecules/Footer";
import GameSelector from "../components/molecules/GameSelector";
import Button from "../components/atoms/Button"

const Home = () => {
    return (
        <PageContainer>
            <H1>Welcome To the game</H1>
            <P>Choose a game below</P>
            <GameSelector title={'Note Recoginiton'} />
            <GameSelector title={'Instrument Recoginiton'}/>
            <P>See your results</P>
            <Button>Results</Button>
        </PageContainer>
    )
}

export default Home