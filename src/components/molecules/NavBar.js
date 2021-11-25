import styled from 'styled-components';
import Nav from '../atoms/Nav';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import ScoreListContext from "../../contexts/ScoreContext";

const NavBar = () => {

  // Consume the context
  const { gem } =
    useContext(ScoreListContext);


    return (
        <Nav>
            <div>
                <Link to='/' style={{textDecoration: 'none'}}>
                    {/* <Logo src='./images/BEStackLogo.png'/>   */}
                    <NavBarTitle>Train your Theory</NavBarTitle>
                </Link>
                
            </div>
            <Bubble>{gem} 💎</Bubble>
        </Nav>
    )
}

export default NavBar

const NavBarTitle = styled.h2`
    color: ${props => props.theme.colors.FontHeadingColor};
    transition: .5s ease;
    &:hover {
        color: ${props => props.theme.colors.HoverColor};
    }

`

const Bubble = styled.div`
    border: 1px ${props => props.theme.colors.HoverColor} solid;
    border-radius: 4px;
    padding: 5px 2px 5px 5px;
    transition: .5s ease;
    &:hover {
      background: ${props => props.theme.colors.HoverColor};
    }
`;