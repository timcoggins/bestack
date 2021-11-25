import styled from "styled-components";

const Table = styled.table`
  width: 100%;
  //text-align: center;
  font-size: 1.1em;
  th {
    text-align: left;
    padding: 8px;
    text-decoration: underline;
  }
  td {
    padding: 8px;
  }
  tr:nth-child(odd) {
    background: ${props => props.theme.colors.HoverColor};
  }
  tr:nth-child(even) {background: #FFF}
`;

export default Table;