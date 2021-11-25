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
    background:  ${props => props.theme.colors.PrimaryColor};
    text-align: center;
    color: white;
    padding: 1px;
`