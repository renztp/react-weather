import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import PlacesAutocomplete, {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from "react-places-autocomplete";
import { useHistory } from "react-router-dom";

export default function AppSearch(props) {
  const history = useHistory();
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
    await setAddress(value);
    await setCoordinates(latlng);
    await props.passfunction(latlng);
    history.push("/");
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
                      ? "loc-input-wrapper search is--focused"
                      : "loc-input-wrapper search"
                  }
                  onFocus={handleInputFocus}
                  onBlur={handleInputFocus}
                >
                  <input
                    {...getInputProps({
                      placeholder: "I.e Philippines",
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
