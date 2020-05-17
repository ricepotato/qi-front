import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Mf from "./Mf";

export default () => (
  <Router>
    <>
      <Route path="/" exact component={Home} />
      <Route path="/mf/:market/:year" exact component={Mf}></Route>
    </>
  </Router>
);
