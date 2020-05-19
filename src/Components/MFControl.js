import React from "react";
import styeld from "styled-components";
import { Link } from "react-router-dom";

const Arrow = styeld.button`
`;

const mfControl = ({ year, market }) => {
  const onChnageMarket = (e) => {
    const {
      target: { value },
    } = e;
    window.location.href = `/#/mf/${value}/${year}`;
    console.log(value);
  };

  return (
    <div>
      <form>
        <div>
          <div>
            <Arrow href="#">&lt;</Arrow>
            <span>{year}</span>
            <Arrow href="#">&gt;</Arrow>
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

        <input placeholder="최소 시가총액"></input>
        <input placeholder="종목 수"></input>
        <button tyle="submit">새로고침</button>
      </form>
    </div>
  );
};

export default mfControl;
