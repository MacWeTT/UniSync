import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";

import "./Search.css";

const Search = () => {
  const [selectedFilter, setSelectedFilter] = useState("personalised");

  return (
    <div className="search-wrapper">
      <div className="search-container">
        <div className="search-left">
          <div className="filters">
            <div
              onClick={() => setSelectedFilter("personalised")}
              className={`personalised ${
                selectedFilter === "personalised" ? "filter-selected" : ""
              }`}
            >
              Personalised
            </div>
            <div
              onClick={() => setSelectedFilter("following")}
              className={`following ${
                selectedFilter === "following" ? "filter-selected" : ""
              }`}
            >
              Following
            </div>
          </div>
        </div>
        <div className="search-right">
          <div className="search-bar">
            <SearchIcon className="search-ico" />
            <input type="text" placeholder="Search..." />
          </div>
          <TuneIcon fontSize="large" className="filter-ico" />
        </div>
      </div>
    </div>
  );
};

export default Search;
