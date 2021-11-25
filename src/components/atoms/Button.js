import styled from "styled-components";

const Button = styled.button`
    display: block;
    height: 40px;
    width: 100px;
    background: ${props => props.theme.colors.PrimaryColor};
    color: white;
    border: 0;

    &:hover {
        background: grey;
    } 

`;

export default Button
