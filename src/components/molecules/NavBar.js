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
            <P>15 💎</P>
        </Nav>
    )
}

export default NavBar

const NavBarTitle = styled.h2`
    color: white;


`