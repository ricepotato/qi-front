import React from "react";
import MFTable from "../../Components/MFTable";
import MFControl from "../../Components/MFControl";

const mf = ({ location, match }) => {
  const {
    params: { year, market },
  } = match;

  return (
    <>
      <h1>마법공식 종목 추천</h1>
      <MFControl year={year} market={market}></MFControl>
      <MFTable></MFTable>
    </>
  );
};

export default mf;
