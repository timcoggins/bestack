import { Link } from 'react-router-dom';
import PageContainer from "../components/atoms/PageContainer"
import H1 from "../components/atoms/H1"
import P from "../components/atoms/P"
import Button from "../components/atoms/Button";

const Results = () => {

return (

    <PageContainer>
        <H1>Results</H1>
        <P>100%</P>
        <P>{'comment based on results'}</P>

        <table>
        <tr>
            <th>Name</th>
            <th>Score</th>
        </tr>
        <tr>
            <td>name</td>
            <td>score</td>
        </tr>
        <tr>
            <td>name</td>
            <td>score</td>
        </tr>
        </table>
    
        <Link to='/noterecognitionsetup'><Button> Start Again </Button></Link>
        <Link to='/home'><Button> Home </Button></Link>
    
    </PageContainer>

)

}

export default Results