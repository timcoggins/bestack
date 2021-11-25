import P from '../atoms/P'
import Nav from '../atoms/Nav'
import Logo from '../atoms/Logo'
import { Link } from 'react-router-dom'

const NavBar = () => {

    return (
        <Nav>
            <div>
            <Link to='/'>
                <Logo src='./images/BEStackLogo.png'/> 
                {/* <P>Music Trainer</P> */}
            </Link>
            Music Trainer
            </div>
            <P>Something</P>
        </Nav>
    )
}

export default NavBar