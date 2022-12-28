import React from "react";
import agent from "../../agent";
import logo from "../../imgs/logo.png";

const Banner = ({ onTitleSearch }) => {

  const handleSearch = (event) => {
    const searchString = event.target.value;
    if (searchString.length > 2) {
      onTitleSearch(
        searchString,
        (page) => agent.Items.byTitle(searchString, page),
        agent.Items.byTitle(searchString)
      );
    } else {
      onTitleSearch(
        "",
        (page) => agent.Items.byTitle("", page),
        agent.Items.byTitle("")
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
