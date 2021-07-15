import React, { useState, useEffect } from "react";
import { BiCurrentLocation } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function SidebarNavCont({ passfunction } = this.props) {
  const [latlng, getLatlng] = useState(null);
  const getCurrLocation = async () => {
    navigator.geolocation.getCurrentPosition(function (pos) {
      // getLatlng({ lat: pos.coords.latitude, lng: pos.coords.longitude });
      passfunction({
        latlng: { lat: pos.coords.latitude, lng: pos.coords.longitude },
      });
    });
  };

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
        <BiCurrentLocation size="1.5em" onClick={() => getCurrLocation()} />
      </button>
    </div>
  );
}
