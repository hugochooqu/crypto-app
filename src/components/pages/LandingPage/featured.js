import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import axios from "axios";

import Coins from "../../coins/coins";

import classes from "./featured.module.css";

const Featured = () => {
  const [data, setData] = useState(null);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=ngn&order=market_cap_desc&per_page=6&page=1&sparkline=false&locale=en";

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
    ))

  return (
    <div className={classes.featured}>
      <div  className={classes.explore}>
        <h1>Explore top Crypto's like Bitcoin,Ethereum, and Dogecoin</h1>
        <p>See all available assets Cryptocurrencies and NFT'S</p>
        <button><Link to='/coinpage' style={{ textDecoration: 'none', BackgroundColor:"gold", color:"black" }}>See more coins</Link></button>
      </div>
      <div style={{ width: "50vw" }} className={classes.coins}>
        {coins}
      </div>
      <button className={classes.coinBtn}><Link to='/coinpage' style={{ textDecoration: 'none', BackgroundColor:"gold", color:"black" }}>See more coins</Link></button>

      <Outlet/>
    </div>
  );
};

export default Featured;
