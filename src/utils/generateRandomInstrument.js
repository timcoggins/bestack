import InstrumentRecognitionList from "../assets/instrumentRecognitionList";

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

const generateRandomInstrument = (difficulty) => {
    
    
    return getRandomInt(0, InstrumentRecognitionList.length);
}

export default generateRandomInstrument