import styled from 'styled-components';

export const TransactionTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const TransactionTableHead = styled.th`
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: lightblue;
  color: white;
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
`;

export const TransactionTableData = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
`;

export const TransactionTableLine = styled.tr`
  &:nth-of-type(2n) {
    background-color: #f0f3f4;
  }
`;