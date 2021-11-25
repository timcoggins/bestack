import styled from 'styled-components'
import P from '../atoms/P'

const Footer = () => {

    return (
        <FooterContainer>
        <P>Created by Team BeStack</P>
        </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.footer`
    background: cornflowerblue;
    text-align: center;
    color: white;
    padding: 15px;
`