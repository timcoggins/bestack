/**
 * InstrumentRecognition.js
 * Game page
 */
import { useState, useContext, useEffect } from "react";
import InstrumentRecognitionList from "../assets/instrumentRecognitionList";
import generateRandomInstrument from "../utils/generateRandomInstrument";
import ShuffleArray from "../utils/ShuffleArray";
import ScoreListContext from "../contexts/ScoreContext";

import StyledLink from "../components/atoms/StyledLink";
import PageContainer from "../components/atoms/PageContainer";
import P from "../components/atoms/P";
import Instrument from "../components/atoms/Instrument";
import InstrumentContainer from "../components/atoms/InstrumentContainer";
import InstrumentImg from "../components/atoms/InstrumentImg";
import Button from "../components/atoms/Button";
import Center from "../components/atoms/Center";
import Controls from "../components/atoms/Controls";

/**
 * InstrumentRecognition
 * @returns {JSX.Element}
 * @constructor
 */
const InstrumentRecognition = () => {

  // Consume the context
  const { instrumentSettings, scoreList, setScoreList, gem, setGem } =
    useContext(ScoreListContext);
  const [resultBtnDisabled, setResultBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  console.log(instrumentSettings);

  const FilteredInstruments = InstrumentRecognitionList.filter((item) => {
    if (instrumentSettings.difficulty === "easy" && item.difficulty > 1)
      return false;
    if (instrumentSettings.difficulty === "medium" && item.difficulty > 2)
      return false;
    if (instrumentSettings.difficulty === "hard" && item.difficulty > 3)
      return false;
    return true;
  });

  // Declare state variables
  const [question, setQuestion] = useState(
    FilteredInstruments[generateRandomInstrument(FilteredInstruments)]
  );

  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState(0);
  const [ userAnswer, setUserAnswer ] = useState('')

  // Random list of question
  const [randQuestList, setRandQuestList] = useState([])

  useEffect(()=>{
    console.log('InstrumentRecognitionList: ', ShuffleArray(FilteredInstruments).map(instr => instr.id));
    const newRandQuestList = [...randQuestList];
    
    
    while (newRandQuestList.length <= instrumentSettings.numberOfQuestions) {
      ShuffleArray(FilteredInstruments).map(instr => newRandQuestList.push(instr.id));
      console.log('newRandQuestList: ', newRandQuestList);
      setRandQuestList(newRandQuestList);
    }
    console.log('randQuestList: ', randQuestList);
  }, [])

  /**
   * Checks the users answer when they click on a button
   * @param answer
   */
  const checkAnswer = (answer) => {
    // If the user has already chosen an answer dont listen to another
    if (userAnswer !== "") return;
    setUserAnswer(answer)
    // Check the answer
    if (answer === question.name) {
      // setMsg("Correct");
      setScore(score + 1);
      setGem(gem + 1);
    } else {
      // setMsg("Incorrect");
    }
    setQuestions(questions + 1);
    setNextBtnDisabled(false);
  };

  console.log(userAnswer)
  /**
   * Goes to the next question or the results page
   */
  const nextQuestion = () => {
    if(userAnswer === '') return;
    setUserAnswer('')
    if (questions !== instrumentSettings.numberOfQuestions) {
      // setMsg("");
      setQuestion(
        FilteredInstruments[generateRandomInstrument(FilteredInstruments)]
      );
    } else {
      // setMsg("Finished!");
      const newScore = {
        gameId: "2",
        difficultyLevel: instrumentSettings.difficulty,
        scoreInPc: (score / instrumentSettings.numberOfQuestions) * 100,
      };
      const newScoreList = scoreList.slice();
      newScoreList.unshift(newScore);
      setScoreList(newScoreList);
      setResultBtnDisabled(false);
    }
  };

  /**
   * Check if an answer was incorrect and makes it red in the map or something idk its really late, too tired... but it works i guess
   * @param name
   */
  const checkIncorrect = (name) => (name === userAnswer && userAnswer !== question.name)


  // JSX
  return (
    <PageContainer>
      <P>Listen closely and pick which instrument is playing</P>
      {/*<P>Difficulty: {instrumentSettings.difficulty}</P>*/}
      {/*<P>Score: {score}</P>*/}
      {/*<P>Questions: {questions} / {instrumentSettings.numberOfQuestions} </P>*/}

      <Center>

            <div style={{margin: '30px 0'}}>
              {!userAnswer ? (<audio controls >
            <source src={question.audio} type="audio/wav" />
          </audio>) : <div style={{height: '58px'}}/>}
            </div>

      </Center>

      <InstrumentContainer>
        {FilteredInstruments.map((item, index) => (
          <Instrument key={index} onClick={() => checkAnswer(item.name)} correct={userAnswer === item.name && userAnswer === question.name} incorrect={checkIncorrect(item.name)}>
            <InstrumentImg src={`${item.icon}`} />
            <P>{item.name}</P>
          </Instrument>
        ))}
      </InstrumentContainer>

      {/*<P>{msg}</P>*/}

      <Controls middle>
        {!resultBtnDisabled ? (
          <StyledLink to="/results">
            <Button>Finish</Button>
          </StyledLink>
        ) : (
          <Button disabled={nextBtnDisabled} onClick={() => nextQuestion()}>Next</Button>
        )}
      </Controls>
    </PageContainer>
  );
};

export default InstrumentRecognition;

