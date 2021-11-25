import styled from 'styled-components'
import P from '../atoms/P'
import Nav from '../atoms/Nav'
import Logo from '../atoms/Logo'
import { Link } from 'react-router-dom'

const NavBar = () => {

    return (
        <Nav>
            
            <Link to='/'>
                <Logo src='./images/BEStackLogo.png'/> 
                {/* <P>Music Trainer</P> */}
            </Link>
            <NavBarTitle>Train your Theory</NavBarTitle>
        </Nav>
    )
}

export default NavBar

const NavBarTitle = styled.h2`
    color: white;
    margin: 0 0 0 15px;

`