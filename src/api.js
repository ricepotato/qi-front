import axios from "axios";

const api = axios.create({
  baseURL: "https://quant-invest-253108.df.r.appspot.com/",
});

export const stock = {
  get: (year, market, mc_min = null, mc_max = null, limit = 20) => {
    api.get(`stock/${market}/${year}/`, {
      params: { mc_min, mc_max, limit },
    });
  },
};
