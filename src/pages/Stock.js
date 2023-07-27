import React from "react";
import { useParams } from "react-router-dom";
import stocksData from "../data.js";

const Stock = () => {
  const { symbol } = useParams();
  const stock = stocksData.find((s) => s.symbol === symbol);

  if (!stock) {
    return <div>Stock not found</div>;
  }

  return (
    <div>
      <h2>{stock.name}</h2>
      <p>Symbol: {stock.symbol}</p>
      <p>Last Price: {stock.lastPrice}</p>
      <p>Change: {stock.change}</p>
      <p>High: {stock.high}</p>
      <p>Low: {stock.low}</p>
      <p>Open: {stock.open}</p>
    </div>
  );
};

export default Stock;