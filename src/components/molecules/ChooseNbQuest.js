import Select from "../atoms/Select";
import P from "../atoms/P";

const ChooseNbQuest = (props) => {

  const { options, setOptions } = props;

  return (
    <>
      <P>Decide how many questions to play</P>
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
    </>
  );
};
export default ChooseNbQuest;
