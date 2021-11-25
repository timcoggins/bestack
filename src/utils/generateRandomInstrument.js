function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

const generateRandomInstrument = (instrumentList) => {
    

    
    return getRandomInt(0, instrumentList.length);
}

export default generateRandomInstrument