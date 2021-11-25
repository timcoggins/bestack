/**
 * Results.js
 */

// Imports
/* import { Link } from 'react-router-dom'; */
import { useContext } from 'react';
import ScoreListContext from '../contexts/ScoreContext';

import StyledLink from '../components/atoms/StyledLink';
import PageContainer from "../components/atoms/PageContainer"
import H1 from "../components/atoms/H1"
import P from "../components/atoms/P"
import Button from "../components/atoms/Button";

/**
 * Results
 * @returns {JSX.Element}
 */
const Results = () => {

    // Consume the context
    const { scoreList } = useContext(ScoreListContext);

    console.log(scoreList)

    return (
        <PageContainer>
            <H1>Results</H1>
            <P>100%</P>
            {/* <P>
                if ()
                {}
            
            </P> */}

            <table>

                <tbody>
                    {scoreList && scoreList.map(item => 
                    <tr>
                        <td>{item.gameId}</td>
                        <td>{item.ScoreInPc} / Question Number</td>
                    </tr>
                    )}
                </tbody>
            </table>

            <StyledLink to='/noterecognitionsetup'><Button> Start Again </Button></StyledLink>
            <StyledLink to='/home'><Button> Home </Button></StyledLink>

        </PageContainer>
    )
}

export default Results