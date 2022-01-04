import axios from "axios";

const api = axios.create({
  baseURL: "https://white-sashimi.uc.r.appspot.com/",
});

export const stock = {
  get: (year, market, mc_min = null, mc_max = null, limit = 20) => {
    return api.get(`stocks/${market}/${year}/`, {
      params: { mc_min, mc_max, limit },
    });
  },
};
