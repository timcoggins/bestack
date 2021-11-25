import styled from 'styled-components'

import P from '../atoms/P'

const GameSelector = (props) => {
    return (
        <Container>

            <P>{props.title}</P>
            <img src='./audio-waves.png' alt='start the game' width='40px'/>

        </Container>
    )
}

export default GameSelector

// styles temp
const Container = styled.div`
    display: flex;
    place-content: space-between;
    padding: 15px;
    &:hover {
        background: gray;
    }
`;
