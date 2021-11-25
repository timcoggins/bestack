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
import Table from '../components/atoms/Table';

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
            <P>{Object.keys(scoreList).length !== 0
                ? `Last result: ${scoreList[0].scoreInPc} %`
                : "No result yet..."
                }
            </P>

            <Table>
                <tbody>
                    <tr>
                        <th>Game</th><th>Score in %</th>
                    </tr>
                    {scoreList && scoreList.map((item, index) => 
                    <tr key={index}>
                        <td>{item.gameId}</td><td>{item.scoreInPc}%</td>
                    </tr>
                    )}
                </tbody>
            </Table>

            <StyledLink to='/noterecognitionsetup'><Button> Start Again </Button></StyledLink>
            <StyledLink to='/home'><Button> Home </Button></StyledLink>

        </PageContainer>
    )
}

export default Results