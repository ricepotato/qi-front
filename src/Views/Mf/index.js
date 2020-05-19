import React, { useEffect, useState } from "react";
import MFTable from "../../Components/MFTable";
import MFControl from "../../Components/MFControl";
import { stock } from "../../api";
import Loader from "../../Components/Loader";

const Mf = ({ location, match }) => {
  const [mfList, setMfList] = useState([]);
  const {
    params: { year, market },
  } = match;

  const getMfList = async (year, market) => {
    try {
      const res = await stock.get(year, market);
      const {
        data: { data },
      } = res;
      setMfList(data);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getMfList(year, market);
  }, [market, year]);

  return (
    <>
      <h1>마법공식 종목 추천</h1>
      <MFControl year={year} market={market}></MFControl>

      {mfList.length > 0 ? (
        <MFTable mfList={mfList}></MFTable>
      ) : (
        <Loader></Loader>
      )}
    </>
  );
};

export default Mf;
