import React from "react";
import MFTable from "../../Components/MFTable";
import MFControl from "../../Components/MFControl";
import Loader from "../../Components/Loader";
import useStock from "../../hooks/useStock";

const Mf = ({ location, match }) => {
  const {
    params: { year, market },
  } = match;

  const { query, setQuery, isLoading, data } = useStock({ year, market });

  return (
    <>
      <MFControl query={query} setQuery={setQuery}></MFControl>
      {isLoading ? <Loader></Loader> : null}
      {data ? <MFTable mfList={data}></MFTable> : null}
    </>
  );
};

export default Mf;
