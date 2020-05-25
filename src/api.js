import axios from "axios";

const api = axios.create({
  baseURL: "https://quant-invest-253108.df.r.appspot.com/",
  //baseURL: "http://localhost:8080/",
});

export const stock = {
  get: (year, market, mc_min = null, mc_max = null, limit = 20) => {
    return api.get(`stock/${market}/${year}/`, {
      params: { mc_min, mc_max, limit },
    });
  },

  get2: (year, market, mc_min = null, mc_max = null, limit = 20) => {
    return {
      data: {
        data: [
          {
            category_code: "053802",
            code: "151860",
            fr: {
              "2015-12": {
                pbr: 0.83,
                per: 5.67,
                roa: 11.15,
                roe: 15.77,
              },
              "2016-12": {
                pbr: 0.94,
                per: 26.61,
                roa: 2.54,
                roe: 3.58,
              },
              "2017-12": {
                pbr: 1.01,
                per: 12.77,
                roa: 5.84,
                roe: 8.21,
              },
              "2018-12": {
                pbr: 0.75,
                per: 10.26,
                roa: 5.21,
                roe: 7.58,
              },
              "2019-12": {
                pbr: 0.49,
                per: 1.22,
                roa: 29.66,
                roe: 49.82,
              },
            },
            market_cap: 1458,
            name: "KG ETS",
            pbr: 0.49,
            per: 1.22,
            per_rank: 1,
            roa: 29.66,
            roa_rank: 3,
            roe: 49.82,
            total_rank: 4,
          },
          {
            category_code: "074605",
            code: "032940",
            fr: {
              "2015-12": {
                pbr: 1.85,
                per: null,
                roa: -1.42,
                roe: -2.72,
              },
              "2016-12": {
                pbr: 0.58,
                per: 0.86,
                roa: 53.1,
                roe: 99.91,
              },
              "2017-12": {
                pbr: 0.55,
                per: 5.4,
                roa: 7.36,
                roe: 10.76,
              },
              "2018-12": {
                pbr: 1.13,
                per: null,
                roa: -46.17,
                roe: -81.71,
              },
              "2019-12": {
                pbr: 0.67,
                per: 1.64,
                roa: 29.64,
                roe: 50.98,
              },
            },
            market_cap: 580,
            name: "\uc6d0\uc775",
            pbr: 0.67,
            per: 1.64,
            per_rank: 3,
            roa: 29.64,
            roa_rank: 4,
            roe: 50.98,
            total_rank: 7,
          },
          {
            category_code: "105802",
            code: "054920",
            fr: {
              "2015-12": {
                pbr: 1.01,
                per: null,
                roa: -4.21,
                roe: -7.3,
              },
              "2016-12": {
                pbr: 1.01,
                per: null,
                roa: -0.13,
                roe: -0.22,
              },
              "2017-12": {
                pbr: 0.8,
                per: 31.08,
                roa: 1.63,
                roe: 2.66,
              },
              "2018-12": {
                pbr: 0.76,
                per: 156.96,
                roa: 0.18,
                roe: 0.5,
              },
              "2019-12": {
                pbr: 0.59,
                per: 1.46,
                roa: 25.21,
                roe: 36.53,
              },
            },
            market_cap: 763,
            name: "\ud55c\ucef4\uc704\ub4dc",
            pbr: 0.59,
            per: 1.46,
            per_rank: 2,
            roa: 25.21,
            roa_rank: 9,
            roe: 36.53,
            total_rank: 11,
          },
        ],
      },
    };
  },
};
