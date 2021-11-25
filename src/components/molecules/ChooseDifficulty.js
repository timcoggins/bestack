import Select from "../atoms/Select";
import P from "../atoms/P";
import Controls from "../atoms/Controls"

const ChooseDifficulty = (props) => {
  const { options, setOptions } = props;

  return (
    <Controls>
      <P>Choose an difficulty</P>
      <Select
        onChange={(e) => setOptions({ ...options, difficulty: e.target.value })}
        value={options.difficulty}
      >
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </Select>
    </Controls>
  );
};
export default ChooseDifficulty;
