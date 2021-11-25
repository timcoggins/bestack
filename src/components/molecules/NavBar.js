import styled from 'styled-components'
import P from '../atoms/P'
import Nav from '../atoms/Nav'
import Logo from '../atoms/Logo'
import { Link } from 'react-router-dom'

const NavBar = () => {

    return (
        <Nav>
            <div>
                <Link to='/' style={{textDecoration: 'none'}}>
                    {/* <Logo src='./images/BEStackLogo.png'/>   */}
                    <NavBarTitle>Train your Theory</NavBarTitle>
                </Link>
                
            </div>
            <Bubble>15 💎</Bubble>
        </Nav>
    )
}

export default NavBar

const NavBarTitle = styled.h2`
    color: white;
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