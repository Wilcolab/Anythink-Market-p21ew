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
        <div className="row align-items-center justify-content-center">
          <div className="col-2">
            <span className="col-form-label">A place to </span>
            <span id="get-part" className="col-form-label">get</span>
          </div>
          <div className="col-5 input-group">
            <input type="search" id="search-box" className="form-control py-2 border-right-0 border" placeholder="What is it that you truly desire?" onChange={handleSearch}></input>
            <span className="input-group-append bg-transparent">
              <i class="bi bi-search input-group-text bg-white text-primary"></i>
            </span>
          </div>
          <div className="col-2">
            <span className="col-form-label"> the cool stuff.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
