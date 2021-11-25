import styled from "styled-components";

const Nav = styled.nav`
    display: flex;
    place-content: space-between;
    align-items: center;
    background:  ${props => props.theme.colors.PrimaryColor};
    padding: 0 20px;
    color: ${props => props.theme.colors.FontHeadingColor};
`;

export default Nav
