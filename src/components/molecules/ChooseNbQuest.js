import { useContext } from "react";
import ScoreListContext from "../../contexts/ScoreContext";
import Select from "../atoms/Select";
import P from "../atoms/P";

const ChooseNbQuest = () => {
  // Consume context
  const { noteSettings, setNoteSettings } = useContext(ScoreListContext);

  return (
    <>
      <P>Decide how many questions to play</P>
      <Select
        onChange={(e) =>
          setNoteSettings({
            ...noteSettings,
            numberOfQuestions: e.target.value,
          })
        }
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={20}>20</option>
      </Select>
    </>
  );
};
export default ChooseNbQuest;
