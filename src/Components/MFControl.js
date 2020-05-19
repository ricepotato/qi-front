import React, { useState } from "react";
import styeld from "styled-components";
import { Link } from "react-router-dom";

const Arrow = styeld.button`
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
    window.location.href = `/#/mf/${value}/${year}`;
  };

  const onClickArrow = (e) => {
    e.preventDefault();
    const { target } = e;
    console.log(target);
    console.log(target.innerHTML);
    if (target.innerHTML === "&lt;") {
      window.location.href = `/#/mf/${market}/${parseInt(year) - 1}`;
    } else if (target.innerHTML === "&gt;") {
      window.location.href = `/#/mf/${market}/${parseInt(year) + 1}`;
    }
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
    <div>
      <div>
        <div>
          <Arrow onClick={onClickArrow}>&lt;</Arrow>
          <span>{year}</span>
          <Arrow onClick={onClickArrow}>&gt;</Arrow>
        </div>
        <div>
          <input
            id="chk_market_kosdaq"
            name="market"
            value="KOSDAQ"
            type="radio"
            checked={market === "KOSDAQ" ? true : false}
            onChange={onChnageMarket}
          ></input>
          <label htmlFor="chk_market_kosdaq">KOSDAQ</label>

          <input
            id="chk_market_kospi"
            name="market"
            value="KOSPI"
            type="radio"
            checked={market === "KOSPI" ? true : false}
            onChange={onChnageMarket}
          ></input>
          <label htmlFor="chk_market_kospi">KOSPI</label>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={terms.mc_min}
          onChange={updateTerms}
          placeholder="최소 시가총액"
          name="mc_min"
        ></input>
        <input
          type="number"
          value={terms.mc_max}
          onChange={updateTerms}
          placeholder="최대 시가총액"
          name="mc_max"
        ></input>
        <input
          value={terms.limit}
          onChange={updateTerms}
          type="number"
          name="limit"
          placeholder="종목 수"
        ></input>
        <button type="submit">새로고침</button>
      </form>
    </div>
  );
};

export default MfControl;
