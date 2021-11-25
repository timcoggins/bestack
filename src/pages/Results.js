/**
 * Results.js
 */

// Imports
/* import { Link } from 'react-router-dom'; */
import { useContext } from "react";
import ScoreListContext from "../contexts/ScoreContext";

import Games from "../assets/GameList";

import StyledLink from "../components/atoms/StyledLink";
import PageContainer from "../components/atoms/PageContainer";
import H1 from "../components/atoms/H1";
import P from "../components/atoms/P";
import Button from "../components/atoms/Button";
import Table from "../components/atoms/Table";
import Center from "../components/atoms/Center";

/**
 * Results
 * @returns {JSX.Element}
 */
const Results = () => {
  // Consume the context
  const { scoreList } = useContext(ScoreListContext);

  // console.log(scoreList);

  return (
    <PageContainer>
      <H1>Scores</H1>
        <P>Receive a gem for every correct answer!</P>
        {scoreList.length === 0 && <Center style={{margin: '30px'}}><img src={'./images/gramphone.png'}/></Center>}
      <Center><P>
        {Object.keys(scoreList).length !== 0
          ? `Last game: ${scoreList[0].scoreInPc} %`
          : "No scores yet... start playing!"}
      </P></Center>



        {scoreList.length > 0 && <Center>
        <Table>
          <tbody>
            <tr>
              <th>Game</th>
              <th>Score</th>
            </tr>
            {scoreList &&
              scoreList.map((item, index) => (
                <tr key={index}>
                  <td>{Games.find(game => game.id === item.gameId).name}</td>
                  <td>{item.scoreInPc}%</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Center>}

      <Center style={{ marginTop: "20px" }}>
        <StyledLink to="/">
          <Button> Home </Button>
        </StyledLink>
      </Center>
    </PageContainer>
  );
};

export default Results;
