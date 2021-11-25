import styled, { css } from "styled-components";

import P from '../atoms/P'

const GameSelector = (props) => {
    return (
        <Container disabled={props.disabled}>

            <P>{props.title}</P>
            <img src={props.image} alt='start the game' width='40px'/>
            
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

    ${props => props.disabled && css`
        background: #D3D3D3;
        &:hover {
            background: #D3D3D3;
        }
    `}
    
    margin: 30px 20px;

    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`;
