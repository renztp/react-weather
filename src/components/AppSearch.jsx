import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { OpenStreetMapProvider, GeoSearchControl } from "leaflet-geosearch";
import { map, useLeaflet } from "react-leaflet";

export default function AppSearch() {
  const [searchInput, setSearchInput] = useState("");

  const captureSearch = (e) => {
    setSearchInput(e);
  };

  const Search = (props) => {
    const { map } = useLeaflet(); // access to leaflet map
    const { provider } = props;

    useEffect(() => {
      const searchControl = new GeoSearchControl({
        provider,
      });

      map.addControl(searchControl); // this is how you add a control in vanilla leaflet
      return () => map.removeControl(searchControl);
    }, [props]);

    return null; // don't want anything to show up from this comp
  };

  return (
    <div className="app-search">
      <div className="AppSidebar__nav-controls">
        <form action="" className="app-search__form">
          {searchInput.length > 0 ? (
            ""
          ) : (
            <p className="app-search__placeholder">
              <FiSearch color="#888" /> <span>Search...</span>
            </p>
          )}
          <input type="text" onChange={(e) => captureSearch(e.target.value)} />

          <Map>
            <Search provider={new OpenStreetMapProvider()} />
          </Map>
        </form>
      </div>
    </div>
  );
}
