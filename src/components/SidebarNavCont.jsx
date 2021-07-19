import React, { useState, useEffect } from "react";
import { BiCurrentLocation } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import axios from "axios";

export default function SidebarNavCont({ passfunction } = this.props) {
  const [latlng, getLatlng] = useState(null);
  const [country, setCountry] = useState(null);

  /* Ask current location */

  function findGeolocation() {
    navigator.geolocation.getCurrentPosition(function (pos) {
      getLatlng({ lat: pos.coords.latitude, lng: pos.coords.longitude });
      console.log("geolocation set");
    });
  }

  useEffect(() => {
    findGeolocation();
  }, []);

  function processProperData() {
    fetch(`https://geocode.xyz/${latlng.lat},${latlng.lng}?json=1`)
      .then((res) => res.json())
      .then((response) => {
        passfunction({
          latlng: latlng,
          theCountry: `${response.country}, ${response.prov}`,
        });
      })
      .catch((err) => console.log(err));
  }

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
        <BiCurrentLocation size="1.5em" onClick={() => processProperData()} />
      </button>
    </div>
  );
}
