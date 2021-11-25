import styled, {css} from 'styled-components'

const Controls = styled.div`
  display: flex;
  place-content: space-between;
  margin: 40px 0;
  align-items: center;

  ${props => props.middle && css`
    place-content: center;
    gap: 20px;
    `}

  ${props => props.grid && css`
    place-content: center;
    flex-wrap: wrap;
    gap: 20px;
    `}
`;

export default Controls