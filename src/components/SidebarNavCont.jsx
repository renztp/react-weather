import React from "react";
import { BiCurrentLocation } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function SidebarNavCont() {
  return (
    <div className="AppSidebar__nav-controls">
      <div className="app-search__form">
        <div className="form-container">
          <div className="loc-input-wrapper">
            <Link
              to="/search"
              className="search-btn"
              style={{ textDecoration: "none" }}
            >
              <BsSearch style={{ marginRight: "8px" }} />
              Search Location
            </Link>
          </div>
        </div>
      </div>
      <button className="loc-btn nav-btn">
        <BiCurrentLocation size="1.5em" />
      </button>
    </div>
  );
}
