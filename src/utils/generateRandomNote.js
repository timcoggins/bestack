function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

const generateRandomNote = (difficulty, instrument) => {
    getRandomInt(0, 6)
    const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B']
    return notes[getRandomInt(0, 6)]
}

export default generateRandomNote