import React from "react";
import styeld from "styled-components";

import Table from "react-bootstrap/Table";

const TableRow = styeld.tr``;

const Thead = styeld.tr``;

const MFTable = ({ mfList }) => (
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
      {mfList.map((item, idx) => (
        <tr key={item.code}>
          <td>{item.total_rank}</td>
          <td>
            <a
              target="_blank"
              href={`http://comp.fnguide.com/SVO2/asp/SVD_Main.asp?pGB=1&gicode=A${item.code}&cID=&MenuYn=Y&ReportGB=&NewMenuID=101&stkGb=701`}
              rel="noopener noreferrer"
            >
              {item.name}
            </a>
          </td>
          <td>{item.roe}</td>
          <td>{item.roa}</td>
          <td>{item.per}</td>
          <td>{item.pbr}</td>
          <td>{item.market_cap}</td>
          <td>-</td>
        </tr>
      ))}
    </tbody>
  </Table>
);

export default MFTable;
