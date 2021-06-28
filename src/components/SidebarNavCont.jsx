import React from "react";
import { BiCurrentLocation } from "react-icons/bi";
import { BsSearch, BsChevronLeft } from "react-icons/bs";
import { useHistory } from "react-router-dom";

export default function SidebarNavCont() {
  const history = useHistory();

  return (
    <div className="AppSidebar__nav-controls">
      <div className="app-search__form">
        <div className="form-container">
          <div className="loc-input-wrapper">
            <button
              onClick={() => history.push("/search")}
              className="search-btn"
            >
              {/* <BsChevronLeft className="btn-left" /> */}
              <BsSearch style={{ marginRight: "8px" }} />
              Search Location
            </button>
          </div>
        </div>
      </div>
      <button className="loc-btn nav-btn">
        <BiCurrentLocation size="1.5em" />
      </button>
    </div>
  );
}
