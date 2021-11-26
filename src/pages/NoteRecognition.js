/**
 * NoteRecognition.js
 */
 import { useState, useEffect, useContext } from "react";
/*  import generateRandomNote from "../utils/generateRandomNote"; */
 import ShuffleArray from "../utils/ShuffleArray";
 
 import ScoreListContext from "../contexts/ScoreContext";
 import StyledLink from "../components/atoms/StyledLink";
 
 import PageContainer from "../components/atoms/PageContainer";
 import P from "../components/atoms/P";
 import Button from "../components/atoms/Button";
 import SheetMusic from "react-sheet-music";
 import Controls from "../components/atoms/Controls";
 
 import NotesList from "../assets/notesList";
 /* import Instruments from "../assets/instrumentList"; */
 
 import Center from "../components/atoms/Center";
 
 /* const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'] */
 
 
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
 
   const [score, setScore] = useState(0);
   const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
   const [resultBtnDisabled, setResultBtnDisabled] = useState(true);
   const [questCount, setQuestCount] = useState(1);
   const [ userAnswer, setUserAnswer ] = useState('');
  
   // Random list of question
   const [randQuestList, setRandQuestList] = useState(ShuffleArray(currentNotesList));
 
   useEffect(()=>{
     const newRandQuestList = [...randQuestList];
         
     while (newRandQuestList.length <= noteSettings.numberOfQuestions) {
       console.log('newRandQuestList1: ', currentNotesList);
       ShuffleArray(currentNotesList.map(e => newRandQuestList.push(e)));
       console.log('newRandQuestList2: ', newRandQuestList);
       setRandQuestList(newRandQuestList);
     }
     console.log('randQuestList: ', randQuestList);
   }, [])
 
   const [note, setNote] = useState(randQuestList[questCount]);
   console.log(note)
 
   /**
    * Check user choice
    * @param input
    */
   const checkNote = (input) => {
     if(userAnswer !== '') return;
     setUserAnswer(input);

     if (input === note) {
       setScore(score + 1);
       setGem(gem + 1);
     }
 
     setNextBtnDisabled(false);
    
    };

    const nextQuestion = () => {

      if (questCount >= noteSettings.numberOfQuestions) {
        console.log("finished: " + score + '/' + noteSettings.numberOfQuestions);
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
    }
 
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
 
   /**
    * Check if an answer was incorrect and makes it red in the map or something idk its really late, too tired... but it works i guess
    * @param name
    */
    const checkIncorrect = (name) => (name === userAnswer && userAnswer !== note)
 
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
       {!userAnswer ? <audio controls >
         <source src={`./sounds/${note}.wav`} type="audio/wav" />
       </audio> : <div style={{height: '54px'}}/>}
       </Center>
       <Controls grid style={{ marginTop: "0" }}>
         {currentNotesList.map((element, index) => {
           return (
             <Button
               key={index}
               disabled={!nextBtnDisabled}
               onClick={() => checkNote(element)}
               correct={userAnswer && element === note}
               incorrect={checkIncorrect(element)}
                 square
             >
               {element}
             </Button>
           )
         })}
       </Controls>
 
       <Controls middle>
         {!resultBtnDisabled ? (
           <StyledLink to="/results">
             <Button>Results</Button>
           </StyledLink>
         ) : (
           <Button
             disabled={nextBtnDisabled}
             onClick={() => {
               setNote(randQuestList[questCount - 1]);
               setQuestCount(questCount + 1);
               setUserAnswer('');
               setNextBtnDisabled(true);
               nextQuestion();
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