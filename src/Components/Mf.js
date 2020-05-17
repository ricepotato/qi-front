import React from "react";
import queryString from "query-string";

const mf = ({ location, match }) => {
  const {
    params: { year, market },
  } = match;
  console.log(year, market);

  return (
    <>
      <h1>마법공식 종목 추천</h1>
    </>
  );
};

export default mf;
