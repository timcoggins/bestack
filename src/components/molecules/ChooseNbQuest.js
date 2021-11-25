import Select from "../atoms/Select";
import P from "../atoms/P";
import Controls from "../atoms/Controls"

const ChooseNbQuest = (props) => {

  const { options, setOptions } = props;

  return (
    <Controls>
      <P>Number of Questions</P>
      <Select
        onChange={(e) =>
          setOptions({
            ...options,
            numberOfQuestions: e.target.value,
          })
        }
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={20}>20</option>
      </Select>
    </Controls>
  );
};
export default ChooseNbQuest;
