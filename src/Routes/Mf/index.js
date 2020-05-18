import React from "react";
import MFTable from "../../Components/MFTable";
import MFControl from "../../Components/MFControl";
import { stock } from "../../api";

const mf = async ({ location, match }) => {
  const {
    params: { year, market },
  } = match;

  const res = await stock.get(year, market);
  console.log(res);

  return (
    <>
      <h1>마법공식 종목 추천</h1>
      <MFControl year={year} market={market}></MFControl>
      <MFTable></MFTable>
    </>
  );
};

export default mf;
