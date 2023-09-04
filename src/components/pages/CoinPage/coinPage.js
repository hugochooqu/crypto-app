import React, { useState, useEffect } from "react";
import axios from "axios";

import Coins from "../../coins/coins";
import Header from "../../layout/header";
import NavigationBar from "../../navigation/navigation";

const CoinPage = () => {
  const [data, setData] = useState(null);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=ngn&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(data);

  if (!data) return null;

  const coins = data.map((coin) => (
    <Coins
      key={coin.id}
      image={coin.image}
      name={coin.name}
      price={coin.current_price.toLocaleString()}
      percentage={coin.price_change_percentage_24h.toFixed(2)}
    />
  ));

  return (
    <div>
        <Header>
            <NavigationBar />
        </Header>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto auto",
          paddingLeft: "100px",
          paddingTop:'50px',
          backgroundColor: "rgb(26,28,29)",
          gap:'30px'
        }}
      >
        {coins}
      </div>
    </div>
  );
};

export default CoinPage;
