const BASE_URL = "https://white-sashimi.uc.r.appspot.com/";

export const stockApi = {
  stocks: ({ queryKey }) => {
    const [_, query] = queryKey;
    const fetchUrlArr = [
      `${BASE_URL}/stocks/${query.market}/${query.year}/?limit=${query.limit}`,
    ];
    if (query.mc_max) {
      fetchUrlArr.push(`&mc_max=${query.mc_max}`);
    }
    if (query.mc_min) {
      fetchUrlArr.push(`&mc_min=${query.mc_min}`);
    }
    const fetchUrl = fetchUrlArr.join("");
    return fetch(fetchUrl).then((res) => res.json());
  },
};
