import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

export default function AppSearch() {
  // const [searchInput, setSearchInput] = useState("");

  // const captureSearch = (e) => {
  //   setSearchInput(e);
  // };

  const [address, setAddress] = useState("");

  const handleSelect = async (value) => {};

  return (
    <div className="app-search">
      <div className="AppSidebar__nav-controls">
        <div className="app-search__form">
          <PlacesAutocomplete
            value={address}
            onChange={setAddress}
            onSelect={handleSelect}
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading,
            }) => (
              <div>
                <input
                  {...getInputProps({
                    placeholder: "Search for a location...",
                  })}
                />
                <div>{loading ? <div>Loading...</div> : null}</div>
                {suggestions.map((suggestion, index) => {
                  const style = {
                    backgroundColor: suggestion.active ? "#333" : "#f2f4f6",
                    color: suggestion.active ? "#fff" : "#333",
                  };

                  return (
                    <div
                      key={index}
                      {...getSuggestionItemProps(suggestion, { style })}
                    >
                      {suggestion.description}
                    </div>
                  );
                })}
              </div>
            )}
          </PlacesAutocomplete>

          {/* {searchInput.length > 0 ? (
            ""
          ) : (
            <p className="app-search__placeholder">
              <FiSearch color="#888" /> <span>Search...</span>
            </p>
          )}
          <input type="text" onChange={(e) => captureSearch(e.target.value)} /> */}
        </div>
      </div>
    </div>
  );
}
