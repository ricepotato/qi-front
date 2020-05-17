import React from "react";
import { Link } from "react-router-dom";

const home = () => {
  return (
    <>
      <h1>Home</h1>
      <Link to="/mf/KOSDAQ/2019">KOSDAQ/2019</Link>
    </>
  );
};

export default home;
