import styled, { css } from "styled-components";

const Button = styled.button`
    display: block;
    border-radius: 4px;
    height: 60px; 
    width: 120px;
    background: ${props => props.theme.colors.PrimaryColor};
    color: white;
    border: 0;
    margin-top: 1rem;
    font-size: 1.2em;
    transition: .5s ease;
    
    &:hover {
        background: ${props => props.theme.colors.HoverColor};
    }

    ${props => props.disabled && css`
      background: ${props => props.theme.colors.DisabledColor};
    `}
    ${props => props.correct && css`
      background: #6ca240;
    `}
    ${props => props.incorrect && css`
      background: #da6565;
    `}

`;

export default Button
