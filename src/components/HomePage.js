import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Major system</h1>
      <h2>Get started</h2>
      <ol>
        <li>
          Practice using <Link to="/randomnumbers">random numbesr</Link>
        </li>
      </ol>
    </div>
  );
};

export default HomePage;
