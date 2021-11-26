import styled, { css } from "styled-components";

const Button = styled.button`
    display: block;
    border-radius: 500px;
    height: 60px; 
    width: 120px;
    background: ${props => props.theme.colors.PrimaryColor};
    color: ${props => props.theme.colors.MainBackgroundColor};
    border: 0;
    margin-top: 1rem;
    font-size: 1.2em;
    transition: .5s ease;
    
    &:hover {
        background: ${props => props.theme.colors.HoverColor};
    }

    ${props => props.square && css`
        border-radius: 4px;
    `}

    ${props => props.disabled && css`
      background: ${props => props.theme.colors.DisabledColor};
    `}
    ${props => props.correct && css`
      background: ${props => props.theme.colors.CorrectColor};
      &:hover {
        background: ${props => props.theme.colors.CorrectColor};
      }
      
    `}
    ${props => props.incorrect && css`
      background: ${props => props.theme.colors.IncorrectColor};
      &:hover {
        background: ${props => props.theme.colors.IncorrectColor};
      }
      
    `}

`;

export default Button
