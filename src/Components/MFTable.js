import React from "react";
import styeld from "styled-components";

const Table = styeld.table`
`;

const TableRow = styeld.tr``;

const Thead = styeld.tr``;

const stock = () => {
  return (
    <Table>
      <thead>
        <tr>
          <th>종합순위</th>
          <th>종목명</th>
          <th>ROE</th>
          <th>ROA</th>
          <th>PER</th>
          <th>PBR</th>
          <th>시가총액</th>
          <th>현재 거래가</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>카카오</td>
          <td>1.3</td>
          <td>4.5</td>
          <td>11.2</td>
          <td>33.1</td>
          <td>1445</td>
          <td>29311</td>
        </tr>
        <tr>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default stock;
