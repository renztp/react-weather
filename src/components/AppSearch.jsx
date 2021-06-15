import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import PlacesAutocomplete, {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from "react-places-autocomplete";

export default function AppSearch() {
  // const [searchInput, setSearchInput] = useState("");

  // const captureSearch = (e) => {
  //   setSearchInput(e);
  // };

  const [address, setAddress] = useState("");
  const [locInputState, setlocInputState] = useState(false);
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lng: null,
  });

  const handleSelect = async (value) => {
    const result = await geocodeByAddress(value);
    const latlng = await getLatLng(result[0]);
    setAddress(value);
    setCoordinates(latlng);
    console.log(latlng);
  };

  const clearInput = () => {
    setAddress("");
  };

  const handleInputFocus = () => {
    setlocInputState(!locInputState);
  };

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
              <div className="form-container">
                <div
                  className={
                    locInputState
                      ? "loc-input-wrapper is--focused"
                      : "loc-input-wrapper"
                  }
                  onFocus={handleInputFocus}
                  onBlur={handleInputFocus}
                >
                  <input
                    {...getInputProps({
                      placeholder: "Search for a location...",
                    })}
                  />
                  <IoClose
                    className={address.length > 0 ? "is--visible" : null}
                    onClick={clearInput}
                  />
                </div>
                {/* <div>{loading ? <div>Loading...</div> : null}</div> */}
                <ul
                  className={
                    address.length > 0
                      ? "loc-results is--visible"
                      : "loc-results"
                  }
                >
                  {suggestions.map((suggestion, index) => {
                    const { mainText, secondaryText } =
                      suggestion.formattedSuggestion;
                    const style = {
                      backgroundColor: suggestion.active ? "#fff" : "#f8f6f6",
                      color: suggestion.active ? "#111" : "#555",
                      cursor: "pointer",
                    };

                    return (
                      <li
                        key={index}
                        {...getSuggestionItemProps(suggestion, { style })}
                      >
                        <p className="loc-title">{mainText}</p>
                        {secondaryText ? (
                          <p className="loc-secondary">{secondaryText}</p>
                        ) : null}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </PlacesAutocomplete>
        </div>
      </div>
    </div>
  );
}
