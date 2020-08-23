import React, { useEffect, useState } from "react";
import MFTable from "../../Components/MFTable";
import MFControl from "../../Components/MFControl";
import { stock } from "../../api";
import Loader from "../../Components/Loader";

const Mf = ({ location, match }) => {
  const [mfList, setMfList] = useState([]);
  const [terms, setTerms] = useState({
    limit: 20,
    mc_min: null,
    mc_max: null,
  });

  const {
    params: { year, market },
  } = match;

  const getMfList = async (year, market) => {
    setMfList([]);
    try {
      const res = await stock.get(
        year,
        market,
        terms.mc_min,
        terms.mc_max,
        terms.limit
      );
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
  }, [market, year, terms]);

  return (
    <>
      <MFControl
        year={year}
        market={market}
        termObj={terms}
        setTermObj={setTerms}
      ></MFControl>

      {mfList.length > 0 ? (
        <MFTable mfList={mfList}></MFTable>
      ) : (
        <Loader></Loader>
      )}
    </>
  );
};

export default Mf;
