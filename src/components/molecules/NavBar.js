import P from '../atoms/P'
import Nav from '../atoms/Nav'
import Logo from '../atoms/Logo'
import { Link } from 'react-router-dom'

const NavBar = () => {

    return (
        <Nav>
            <Link to='/'><P>Music Trainer</P></Link>
            <P>Something</P>
        </Nav>
    )
}

export default NavBar