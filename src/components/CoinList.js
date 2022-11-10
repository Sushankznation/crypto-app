import React, { useEffect, useState } from "react";
import Search from "./Search";
import Table from "./Table";

export default function CoinList() {
  const [allCoins, setAllCoins] = useState([]);
  const [value, setValue] = useState("");

  const searchCoins = async () => {
    const fetchInfo = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    const data = await fetchInfo.json();
    setAllCoins(data);
  };
  useEffect(() => {
    searchCoins();
  }, []);
  function searchCoin(e) {
    setValue(e.target.value);
  }
  function getFilteredCoins() {
    return allCoins.filter((val) => {
      return val.name.toLowerCase().includes(value.toLowerCase());
    });
  }

  return (
    <>
      <Search searchCoin={searchCoin} value={value} />
      <Table allCoins={getFilteredCoins()} />
    </>
  );
}
