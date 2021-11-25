import { useState } from 'react'
import PageContainer from "../components/atoms/PageContainer"
import H1 from "../components/atoms/H1"
import P from "../components/atoms/P"
import Instrument from "../components/atoms/Instrument"
import InstrumentContainer from "../components/atoms/InstrumentContainer"
import InstrumentImg from "../components/atoms/InstrumentImg"
import Button from "../components/atoms/Button"
import Center from '../components/atoms/Center'

import InstrumentRecognitionList from "../assets/instrumentRecognitionList"
import generateRandomInstrument from '../utils/generateRandomInstrument'

const InstrumentRecognition = () => {

    const [ question, setQuestion ] = useState(InstrumentRecognitionList[0]);
    const [ msg, setMsg ] = useState('')
    
    const checkAnswer = (answer) => {
        if (answer === question.name) {
            setMsg('Correct')
        } else {
            setMsg('Incorrect')
        }

    }

    return(
        <PageContainer>
            <H1>Instrument Recognition</H1>
            <P>Listen and choose an instrument</P>

            <Center>
                <audio controls>
                    <source src={question.audio} type="audio/wav" />
                </audio>
            </Center>
            <InstrumentContainer>
                {InstrumentRecognitionList.map(item => 
                    <Instrument onClick={() => checkAnswer(item.name)}>
                        <InstrumentImg src={`${item.icon}`} />
                        <P>{item.name}</P>
                    </Instrument>
                )}
            </InstrumentContainer>
            <P>{msg}</P>
            <Button onClick={() =>{
                setQuestion(generateRandomInstrument())
            }}>Next</Button>
        </PageContainer>
    )


}

export default InstrumentRecognition

