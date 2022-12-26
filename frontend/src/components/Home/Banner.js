import React from "react";
import { agent } from "superagent";
import logo from "../../imgs/logo.png";

const Banner = ({ onTitleSearch }) => {

  handleSearch = (event) => {
    const searchString = event.target.value;

    if (searchString >= 3) {
      onTitleSearch(
        searchString,
        (page) => agent.Items.byTitle(searchString, page),
        agent.Items.byTitle(searchString)
      );
    }
  }

  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span>A place to </span>
          <span id="get-part">get</span>
          <input type="search" onChange={handleSearch}></input>
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
