import React from "react";
import { Link } from "react-router-dom";
import stocksData from "../data.js";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {stocksData.map((stock) => (
          <li key={stock.symbol}>
            <Link to={`/stocks/${stock.symbol}`}>
              {stock.name} ({stock.symbol})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Dashboard;
