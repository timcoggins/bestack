import styled, { css } from "styled-components";

const Instrument = styled.div`
    background:  ${props => props.theme.colors.PrimaryColor};
    border-radius: 5px;
    color: ${props => props.theme.colors.FontHeadingColor};
    padding: 20px;
    text-align: center;
    transition: .5s ease;
    &:hover {
        background: ${props => props.theme.colors.HoverColor};
    }
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

export default Instrument
