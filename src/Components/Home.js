import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  const redirect = () => {
    history.push(`/mf/KOSDAQ/2019/`);
  };

  useEffect(() => {
    redirect();
  }, []);

  return (
    <>
      <h1>Home</h1>
      <Link to="/mf/KOSDAQ/2019">KOSDAQ/2019</Link>
    </>
  );
};

export default Home;
