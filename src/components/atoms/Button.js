import styled, { css } from "styled-components";

const Button = styled.button`
    display: block;
    height: 40px;
    width: 100px;
    background: ${props => props.theme.colors.PrimaryColor};
    color: white;
    border: 0;
    margin-top: 1rem;
    font-size: 1.1em;
    &:hover {
        background: grey;
    }

    ${props => props.disabled && css`
    background: ${props => props.theme.colors.DisabledColor};
`}

`;

export default Button
