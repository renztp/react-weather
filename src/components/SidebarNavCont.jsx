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
    });
    console.log(latlng);
  };

  const getCurrCountry = async (pos) => {
    return await fetch(`https://geocode.xyz/${pos.lat},${pos.lng}?json=1`);
  };

  const processCoordReq = () => {
    // getCurrCountry();

    setTimeout(async () => {
      try {
        getCurrLocation();
      } catch (e) {
        console.log(e);
      }

      let locData = {};
      try {
        locData = await (await getCurrCountry(latlng)).json();
      } catch (e) {
        console.log(e);
      }
      // console.log({
      //   latlng: latlng,
      //   theCountry: `${locData.country}, ${locData.prov}`,
      // });
      passfunction({
        latlng: latlng,
        theCountry: `${locData.country}, ${locData.prov}`,
      });
    }, 1000);

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
        <BiCurrentLocation size="1.5em" onClick={() => processCoordReq()} />
      </button>
    </div>
  );
}
