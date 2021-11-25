import styled, { css } from "styled-components";

import P from '../atoms/P'

const GameSelector = (props) => {
    return (
        <Container disabled={props.disabled}>

            <P>{props.title}</P>
            <img src={props.image} alt='start the game' width='40px' height='40px'/>
            
        </Container>
    )
}

export default GameSelector

// styles temp
const Container = styled.div`
    
    color: black;
    display: flex;
    place-content: space-between;
    align-items: center;
    padding: 15px;
    &:hover {
        color: ${props => props.theme.colors.FontHeadingColor};
        background: ${props => props.theme.colors.HoverColor};
    }

    ${props => props.disabled && css`
      background: #eaeaea;

      &:hover {
        background: #D3D3D3;
      }
    `}
    
    margin: 30px 20px;
    transition: .5s ease;

    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`;
