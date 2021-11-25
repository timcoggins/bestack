/**
 * NoteRecognition.js
 */
import { useState, useContext } from "react";
import generateRandomNote from "../utils/generateRandomNote";
import ScoreListContext from "../contexts/ScoreContext";
import StyledLink from "../components/atoms/StyledLink";

import PageContainer from "../components/atoms/PageContainer";
import P from "../components/atoms/P";
import Button from "../components/atoms/Button";
import SheetMusic from "react-sheet-music";
import Controls from "../components/atoms/Controls";
<<<<<<< HEAD
import NotesList from "../assets/notesList";
import Instruments from "../assets/instrumentList";
=======
import Center from "../components/atoms/Center";

const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B']
>>>>>>> 27e775c34490c6c78da27d440baf96ed90eb8c01

/**
 * NoteRecognition
 * @returns {JSX.Element}
 */
const NoteRecognition = () => {
  // Consume context
  const { noteSettings, scoreList, setScoreList, gem, setGem } =
    useContext(ScoreListContext);

  // State variables
  const currentNotesList = NotesList.filter(instrument => instrument.name === noteSettings.selectedInstrument)[0].notes.easy;
  const [note, setNote] = useState(`${generateRandomNote("easy", "piano")}`);
  const [msg, setMsg] = useState("");
  const [score, setScore] = useState(0);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [resultBtnDisabled, setResultBtnDisabled] = useState(true);
  const [questCount, setQuestCount] = useState(1);
  const [ userAnswer, setUserAnswer ] = useState('')



  /**
   * Check user choice
   * @param input
   */
  const checkNote = (input) => {
    if (input === note) {
      setMsg("Correct!");
      setScore(score + 1);
      setGem(gem + 1);
    } else {
      setMsg("Incorrect");
    }
    setNextBtnDisabled(false);
    console.log(
      "questCount / NbOfQuest: " +
        questCount +
        " / " +
        noteSettings.numberOfQuestions
    );
    if (questCount >= noteSettings.numberOfQuestions) {
      console.log("finished");
      const newScore = {
        gameId: "1",
        difficultyLevel: noteSettings.difficulty,
        scoreInPc: (score / noteSettings.numberOfQuestions) * 100,
      };
      const newScoreList = scoreList.slice();
      newScoreList.unshift(newScore);
      setScoreList(newScoreList);
      setResultBtnDisabled(false);
    }
  };

      /**
     * Manage the green and red color for the right and wrong answer buttons
     * @param {string} element 
     * @returns {string}
     */
/*        const handleSelect = (element) => {
        if (selectedAnswer === element && selectedAnswer !== quizQuestion.correct_answer) return "wrong-answer-btn"
        else if (element === quizQuestion.correct_answer) return "right-answer-btn"
        else return null // for the wrong answers that were not selected
    } */

  /**
   * Check if an answer was incorrect and makes it red in the map or something idk its really late, too tired... but it works i guess
   * @param name
   */
  // const checkIncorrect = (name) => (name === userAnswer && userAnswer !== question.name)

  // JSX
  return (
    <PageContainer>
      <P>Go ahead, try to identify the notes!</P>
      <P>Score: {score}</P>
      <div style={{marginLeft: '33%'}}>
        <SheetMusic
            notation={`${note}4`}
            responsive='resize'
            width={100}
        />
      </div>

      <Center>
      {!msg ? <audio controls >
        <source src={`./sounds/${note}.wav`} type="audio/wav" />
      </audio> : <div style={{height: '54px'}}/>}
      </Center>
      <Controls grid style={{ marginTop: "0" }}>
        {currentNotesList.map((note, index) => {
          return (
            <Button onClick={() => checkNote({note})}>{note}</Button>
          )
        })}
      </Controls>

      {msg ? <p>{msg}</p> : ""}
      <Controls middle>
        {!resultBtnDisabled ? (
          <StyledLink to="/results">
            <Button>Results</Button>
          </StyledLink>
        ) : (
          <Button
            disabled={nextBtnDisabled}
            onClick={() => {
              setNote(`${generateRandomNote("easy", "piano")}`);
              setMsg("");
              setQuestCount(questCount + 1);
            }}
          >
            Next Note
          </Button>
        )}
      </Controls>
    </PageContainer>
  );
};

export default NoteRecognition;
