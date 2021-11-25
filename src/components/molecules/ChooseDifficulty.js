import Select from "../atoms/Select";
import P from "../atoms/P";

const ChooseDifficulty = (props) => {
  const { options, setOptions } = props;

  return (
    <>
      <P>Choose an difficulty</P>
      <Select
        onChange={(e) => setOptions({ ...options, difficulty: e.target.value })}
      >
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </Select>
    </>
  );
};
export default ChooseDifficulty;
