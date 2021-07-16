import React, { useState, useEffect } from "react";
import { BiCurrentLocation } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import axios from "axios";

export default function SidebarNavCont({ passfunction } = this.props) {
  const [latlng, getLatlng] = useState(null);
  const getCurrLocation = () => {
    navigator.geolocation.getCurrentPosition(function (pos) {
      getLatlng({ lat: pos.coords.latitude, lng: pos.coords.longitude });
      // passfunction({
      //   latlng: { lat: pos.coords.latitude, lng: pos.coords.longitude },
      // });
    });
  };

  const getCurrCountry = (pos) => {
    // console.log(pos);
    return fetch(`https://geocode.xyz/${pos.lat},${pos.lng}?json=1`)
      .then((res) => res.json())
      .then(function (response) {
        // return response;
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  const processCoordReq = () => {
    // getCurrCountry();
    getCurrLocation();
    // let country = getCurrCountry(latlng);
    // console.log(country);
    // console.log({ coords: latlng, country: country });
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
