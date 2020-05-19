import React, { useEffect, useState } from "react";
import MFTable from "../../Components/MFTable";
import MFControl from "../../Components/MFControl";
import { stock } from "../../api";

const Mf = ({ location, match }) => {
  const [stocks, setStocks] = useState([]);
  const {
    params: { year, market },
  } = match;

  const getStock = async (year, market) => {
    try {
      const res = await stock.get(year, market);
      const { data } = res;
      setStocks(data);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getStock(year, market);
  }, []);

  return (
    <>
      <h1>마법공식 종목 추천</h1>
      <MFControl year={year} market={market}></MFControl>
      <MFTable></MFTable>
    </>
  );
};

export default Mf;
