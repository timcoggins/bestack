/**
 * InstrumentRecognition.js
 * Game page
 */
import { useState, useContext } from 'react'
import InstrumentRecognitionList from "../assets/instrumentRecognitionList"
import generateRandomInstrument from '../utils/generateRandomInstrument'
import ScoreListContext from '../contexts/ScoreContext'

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

    // Consume the context
    const { instrumentSettings } = useContext(ScoreListContext);

    const FilteredInstruments = InstrumentRecognitionList.filter(item => {
        if(instrumentSettings.difficulty === 'easy' && item.difficulty > 1 ) return false
        if(instrumentSettings.difficulty === 'medium' && item.difficulty > 2 ) return false
        if(instrumentSettings.difficulty === 'difficult' && item.difficulty > 3 ) return false
        return true;
    })

    // Declare state variables
    const [ question, setQuestion ] = useState(FilteredInstruments[generateRandomInstrument(FilteredInstruments)]);
    const [ msg, setMsg ] = useState('')
    const [score, setScore ] = useState(0)


    /**
     * Checks the users answer when they click on a button
     * @param answer
     */
    const checkAnswer = (answer) => {
        if (answer === question.name) {
            setMsg('Correct')
            setScore(score+1);
        }
        else setMsg('Incorrect')
    }


    // JSX
    return(
        <PageContainer>
            <H1>Instrument Recognition</H1>
            <P>Listen and choose an instrument</P>
            <P>Difficulty: {instrumentSettings.difficulty}</P>
            <P>Score: {score}</P>

            <Center>
                {!msg && <audio controls>
                    <source src={question.audio} type="audio/wav" />
                </audio>}
            </Center>

            <InstrumentContainer>
                {FilteredInstruments.map(item => 
                    <Instrument onClick={() => checkAnswer(item.name)}>
                        <InstrumentImg src={`${item.icon}`} />
                        <P>{item.name}</P>
                    </Instrument>
                )}
            </InstrumentContainer>

            <P>{msg}</P>

            <Button onClick={() => {
                setMsg('')
                setQuestion(FilteredInstruments[generateRandomInstrument(FilteredInstruments)])
            }}>Next</Button>

        </PageContainer>
    )


}

export default InstrumentRecognition

