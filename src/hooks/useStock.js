import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { stockApi } from "../api";

const useStock = ({ year, market }) => {
  const [query, setQuery] = useState({
    year,
    market,
    limit: 20,
    mc_min: "",
    mc_max: "",
  });

  const { isLoading, data } = useQuery(["stock", query], stockApi.stocks);
  return { query, setQuery, isLoading, data: data?.data };
};

export default useStock;
