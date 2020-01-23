import { FlexColumn, FlexRow } from '../common/styled';


export const PageContainer = FlexColumn.extend`
  position: relative;
  
  max-width: 1000px;
  margin: 50px auto 0;
  
  text-align: center;
`;

export const SearchContainer = FlexRow.extend`
  align-self: center;
  justify-content: center;
  
  margin-top: 25px;
  
  button {
    margin-left: 10px;
  }
`;
