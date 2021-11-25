const generateRandomNote = (difficulty, instrument) => {
    const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B']
    return notes[Math.floor(Math.random() * notes.length)]
}

export default generateRandomNote