import PageContainer from "../components/atoms/PageContainer"
import H1 from "../components/atoms/H1"
import P from "../components/atoms/P"
import Instrument from "../components/atoms/Instrument"
import InstrumentContainer from "../components/atoms/InstrumentContainer"
import InstrumentImg from "../components/atoms/InstrumentImg"
import Button from "../components/atoms/Button"

const InstrumentRecognition = () => {
    return(
        <PageContainer>
            <H1>Instrument Recognition</H1>
            <P>Listen and choose an instrument</P>
            <Button>Play</Button>
            <InstrumentContainer>
                <Instrument>
                    <InstrumentImg src='' />
                    <P>Piano</P>
                </Instrument>
                <Instrument>
                    <InstrumentImg src='' />
                    <P>Trombone</P>
                </Instrument>
                <Instrument>
                    <InstrumentImg src='' />
                    <P>Organ</P>
                </Instrument>
                <Instrument>
                    <InstrumentImg src='' />
                    <P>French Horn</P>
                </Instrument>
            </InstrumentContainer>
        </PageContainer>
    )


}

export default InstrumentRecognition

