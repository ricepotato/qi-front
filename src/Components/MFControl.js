import React, { useState } from "react";
import styeld from "styled-components";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { useHistory } from "react-router-dom";

const Container = styeld.div`
`;

const RadioLabel = styeld.label`
  margin-right:10px;
  color: #fff;
`;

const MfControl = ({ query, setQuery }) => {
  const history = useHistory();
  const [values, setValues] = useState(query);

  const onClickMarket = (e) => {
    const {
      target: { value },
    } = e;
    history.push(`/mf/${value}/${query.year}/`);
    setQuery({ ...query, market: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(values);
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
            <NavDropdown title={query.year} id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link
                  to={`/mf/${query.market}/2019/`}
                  onClick={() => setQuery({ ...query, year: 2019 })}
                >
                  2019
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  to={`/mf/${query.market}/2018/`}
                  onClick={() => setQuery({ ...query, year: 2018 })}
                >
                  2018
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  to={`/mf/${query.market}/2017/`}
                  onClick={() => setQuery({ ...query, year: 2017 })}
                >
                  2017
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  to={`/mf/${query.market}/2016/`}
                  onClick={() => setQuery({ ...query, year: 2016 })}
                >
                  2016
                </Link>
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
              defaultChecked={query.market === "KOSDAQ" ? true : false}
              onClick={onClickMarket}
            />
            <RadioLabel htmlFor="chk_market_kosdaq">KOSDAQ</RadioLabel>
            <FormControl
              type="radio"
              placeholder="Search"
              className="mr-sm-2"
              id="chk_market_kospi"
              name="market"
              value="KOSPI"
              defaultChecked={query.market === "KOSPI" ? true : false}
              onClick={onClickMarket}
            />
            <RadioLabel htmlFor="chk_market_kospi">KOSPI</RadioLabel>
          </Form>

          <Form inline onSubmit={handleSubmit}>
            <FormControl
              type="number"
              className="mr-sm-2"
              placeholder="최소 시가 총액(억원)"
              name="mc_min"
              value={values.mc_min}
              onChange={(e) => setValues({ ...values, mc_min: e.target.value })}
            />
            <FormControl
              type="number"
              className="mr-sm-2"
              placeholder="최대 시가 총액(억원)"
              name="mc_max"
              value={values.mc_max}
              onChange={(e) => setValues({ ...values, mc_max: e.target.value })}
            />
            <FormControl
              type="number"
              className="mr-sm-2"
              placeholder="출력 항목 수"
              name="limit"
              value={values.limit}
              onChange={(e) => setValues({ ...values, limit: e.target.value })}
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
