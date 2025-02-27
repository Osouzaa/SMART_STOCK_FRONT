import styled from "styled-components";

export const TableContainer = styled.div`
  width: 100%;
  max-width: 1400px; /* Limitando a largura */
  margin: 0 auto; /* Centralizando */
  overflow-x: auto;
  padding: 20px;
  border-radius: 8px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  
  th, td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  thead {
    background-color: #313131;
    color: white;
  }

  tbody tr:hover {
    background-color: #f1f1f1;
  }

  @media (max-width: 768px) {
    th, td {
      font-size: 14px;
      padding: 10px;
    }
  }
`;

export const Th = styled.th`
  font-weight: bold;
`;

export const Td = styled.td`
  color: #333;
`;
