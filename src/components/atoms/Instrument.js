import styled from "styled-components";

const Instrument = styled.div`
    background:  ${props => props.theme.colors.PrimaryColor};
    border-radius: 5px;
    color: white;
    padding: 20px;
    text-align: center;
    &:hover {
        background: grey
    }
`;

export default Instrument
