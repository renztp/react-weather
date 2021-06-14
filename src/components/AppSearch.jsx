import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function AppSearch() {
  const [searchInput, setSearchInput] = useState("");

  const captureSearch = (e) => {
    setSearchInput(e);
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
        </form>
      </div>
    </div>
  );
}
