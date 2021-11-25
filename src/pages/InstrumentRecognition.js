/**
 * InstrumentRecognition.js
 * Game page
 */
import { useState, useContext } from 'react'
import InstrumentRecognitionList from "../assets/instrumentRecognitionList"
import generateRandomInstrument from '../utils/generateRandomInstrument'
import ScoreListContext from '../contexts/ScoreContext'

import StyledLink from '../components/atoms/StyledLink';
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
    const { instrumentSettings, scoreList, setScoreList } = useContext(ScoreListContext);
    const [resultBtnDisabled, setResultBtnDisabled] = useState(true);

    console.log(instrumentSettings);

    const FilteredInstruments = InstrumentRecognitionList.filter(item => {
        if(instrumentSettings.difficulty === 'easy' && item.difficulty > 1 ) return false
        if(instrumentSettings.difficulty === 'medium' && item.difficulty > 2 ) return false
        if(instrumentSettings.difficulty === 'hard' && item.difficulty > 3 ) return false
        return true;
    })

    // Declare state variables
    const [ question, setQuestion ] = useState(FilteredInstruments[generateRandomInstrument(FilteredInstruments)]);
    const [ msg, setMsg ] = useState('')
    const [ score, setScore ] = useState(0)
    const [ questions, setQuestions ] = useState(0)


    /**
     * Checks the users answer when they click on a button
     * @param answer
     */
    const checkAnswer = (answer) => {
        // If the user has already chosen an answer dont listen to another
        if(msg !== '') return

        // Check the answer
        if (answer === question.name) {
            setMsg('Correct')
            setScore(score+1);
            setQuestions(questions + 1)
        } else {
            setMsg('Incorrect')
            setQuestions(questions + 1)
        }
    }

    /**
     * Goes to the next question or the results page
     */
    const nextQuestion = () => {
        if(questions !== instrumentSettings.numberOfQuestions) {
            setMsg('')
            setQuestion(FilteredInstruments[generateRandomInstrument(FilteredInstruments)])
        } else {
            setMsg('Finished!')
            setScoreList([...scoreList, {
                gameId: '2',
                difficultyLevel: instrumentSettings.difficulty,
                questNb: questions,
                ScoreInPc: score
            }])
            setResultBtnDisabled(false);
            //setInterval(() => window.location = '/results', 2000);
        }
    }


    // JSX
    return(
        <PageContainer>
            <P>Listen closely and pick which instrument is playing</P>
            {/*<P>Difficulty: {instrumentSettings.difficulty}</P>*/}
            {/*<P>Score: {score}</P>*/}
            {/*<P>Questions: {questions} / {instrumentSettings.numberOfQuestions} </P>*/}

            <Center>
                {!msg && <audio controls>
                    <source src={question.audio} type="audio/wav" />
                </audio>}
            </Center>

            <InstrumentContainer>
                {FilteredInstruments.map((item, index) => 
                    <Instrument key={index} onClick={() => checkAnswer(item.name)}>
                        <InstrumentImg src={`${item.icon}`} />
                        <P>{item.name}</P>
                    </Instrument>
                )}
            </InstrumentContainer>

            <P>{msg}</P>

            <Button onClick={() => nextQuestion()}>Next</Button>

            <StyledLink to='/results' ><Button disabled={resultBtnDisabled}>Results</Button></StyledLink>

        </PageContainer>
    )


}

export default InstrumentRecognition

