import styled, { css } from "styled-components";

const Instrument = styled.div`
    background:  ${props => props.theme.colors.PrimaryColor};
    border-radius: 5px;
    color: white;
    padding: 20px;
    text-align: center;
    transition: .5s ease;
    &:hover {
        background: ${props => props.theme.colors.HoverColor};
    }
    ${props => props.correct && css`
      background: #6ca240;
    `}
    ${props => props.incorrect && css`
      background: #da6565;
    `}
`;

export default Instrument
