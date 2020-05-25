import React, { useState } from "react";
import styeld from "styled-components";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

const Container = styeld.div`
`;

const RadioLabel = styeld.label`
  margin-right:10px;
  color: #fff;
`;

let newTerms = {};

const MfControl = ({ year, market, termObj, setTermObj }) => {
  const [terms, setTerms] = useState({
    ...termObj,
  });
  const onChnageMarket = (e) => {
    const {
      target: { value },
    } = e;
    window.location.href = `/#/mf/${value}/${year}/`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTermObj(newTerms);
  };

  const updateTerms = (e) => {
    const { target } = e;
    newTerms = { ...terms };
    newTerms[target.name] = target.value;
    setTerms(newTerms);
  };

  return (
    <Container>
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        className="bg-light justify-content-between"
      >
        <Navbar.Brand>마법공식 종목추천</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title={year} id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to={`/mf/${market}/2019/`}>2019</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to={`/mf/${market}/2018/`}>2018</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to={`/mf/${market}/2017/`}>2017</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to={`/mf/${market}/2016/`}>2016</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="mr-auto" inline>
            <FormControl
              type="radio"
              placeholder="Search"
              className="mr-sm-2"
              id="chk_market_kosdaq"
              name="market"
              value="KOSDAQ"
              checked={market === "KOSDAQ" ? true : false}
              onChange={onChnageMarket}
            />
            <RadioLabel htmlFor="chk_market_kosdaq">KOSDAQ</RadioLabel>
            <FormControl
              type="radio"
              placeholder="Search"
              className="mr-sm-2"
              id="chk_market_kospi"
              name="market"
              value="KOSPI"
              checked={market === "KOSPI" ? true : false}
              onChange={onChnageMarket}
            />
            <RadioLabel htmlFor="chk_market_kospi">KOSPI</RadioLabel>
          </Form>

          <Form inline onSubmit={handleSubmit}>
            <FormControl
              type="number"
              className="mr-sm-2"
              placeholder="최소 시가 총액"
              name="mc_min"
              value={terms.mc_min}
              onChange={updateTerms}
            />
            <FormControl
              type="number"
              className="mr-sm-2"
              placeholder="최대 시가 총액"
              name="mc_max"
              value={terms.mc_max}
              onChange={updateTerms}
            />
            <FormControl
              type="number"
              className="mr-sm-2"
              placeholder="출력 항목 수"
              name="limit"
              onChange={updateTerms}
              value={terms.limit}
            />
            <Button type="submit" variant="outline-success">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default MfControl;
