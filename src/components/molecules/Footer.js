import styled from 'styled-components'
import P from '../atoms/P'

const Footer = () => {

    return (
        <FooterContainer>
        <P>Created by <a href={'http://https://github.com/timcoggins/bestack'} style={{color: 'white'}}>Team BeStack</a></P>
        </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.footer`
    background:  ${props => props.theme.colors.PrimaryColor};
    text-align: center;
    color: white;
    padding: 1px;
`