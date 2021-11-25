import styled from "styled-components";

const Nav = styled.nav`
    display: flex;
    // place-content: space-between;
    align-items: center;
    background:  ${props => props.theme.colors.PrimaryColor};
    padding: 15px;
    color: white;
`;

export default Nav
