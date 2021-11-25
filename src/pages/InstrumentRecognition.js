/**
 * InstrumentRecognition.js
 * Game page
 */
import { useState } from 'react'
import InstrumentRecognitionList from "../assets/instrumentRecognitionList"
import generateRandomInstrument from '../utils/generateRandomInstrument'

import PageContainer from "../components/atoms/PageContainer"
import H1 from "../components/atoms/H1"
import P from "../components/atoms/P"
import Instrument from "../components/atoms/Instrument"
import InstrumentContainer from "../components/atoms/InstrumentContainer"
import InstrumentImg from "../components/atoms/InstrumentImg"
import Button from "../components/atoms/Button"
import Center from '../components/atoms/Center'

/**
 * InstrumentRecognition
 * @returns {JSX.Element}
 * @constructor
 */
const InstrumentRecognition = () => {

    const [ question, setQuestion ] = useState(InstrumentRecognitionList[0]);
    const [ msg, setMsg ] = useState('')

    /**
     * Checks the users answer when they click on a button
     * @param answer
     */
    const checkAnswer = (answer) => {
        if (answer === question.name) setMsg('Correct')
        else setMsg('Incorrect')
    }

    // JSX
    return(
        <PageContainer>
            <H1>Instrument Recognition</H1>
            <P>Listen and choose an instrument</P>

            <Center>
                {!msg && <audio controls>
                    <source src={question.audio} type="audio/wav" />
                </audio>}
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

            <Button onClick={() => {
                setMsg('')
                setQuestion(InstrumentRecognitionList[generateRandomInstrument('easy')])
            }}>Next</Button>

        </PageContainer>
    )


}

export default InstrumentRecognition

