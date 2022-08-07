import React, { useState } from "react";
import MFTable from "../../Components/MFTable";
import MFControl from "../../Components/MFControl";
import { stockApi } from "../../api";
import Loader from "../../Components/Loader";
import { useQuery } from "@tanstack/react-query";

const Mf = ({ location, match }) => {
  const {
    params: { year, market },
  } = match;

  const [query, setQuery] = useState({
    year,
    market,
    limit: 20,
    mc_min: null,
    mc_max: null,
  });

  const { isLoading, data: mfList } = useQuery(
    ["stock", query],
    stockApi.stocks
  );

  return (
    <>
      <MFControl query={query} setQuery={setQuery}></MFControl>
      {isLoading ? <Loader></Loader> : null}
      {mfList ? <MFTable mfList={mfList.data}></MFTable> : null}
    </>
  );
};

export default Mf;
