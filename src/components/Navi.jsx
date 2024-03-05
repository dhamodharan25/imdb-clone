import React from "react";

import logo_1 from "../logo_1.png";

import { Link } from "react-router-dom";

// navigation bar code
function Navi() {
  return (
    <div className="flex border space-x-8 items-center pl-3 py-4">
      <img className="w-[50px]" src={logo_1} alt="" />
      <Link to="/" className="text-blue-500 text-4xl">
        Home
      </Link>
      <Link to="/watchlist" className="text-blue-500 text-4xl">
        WatchList
      </Link>
    </div>
  );
}

export default Navi;
