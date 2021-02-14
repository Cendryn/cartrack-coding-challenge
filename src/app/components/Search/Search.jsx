import React, { useState } from 'react';

import './Search.css';

const Search = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleChange = ({ target }) => {
    setSearchText(target.value);
  }

  // if requirements need search to be triggered on every key stroke immplement debounce
  const onEnter = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onSearch(searchText);
    }
  }

  return (
    <div id="search-bar">
      <input
        type="text"
        value={searchText}
        placeholder="Search by email and/or email"
        onChange={handleChange}
        onKeyDown={onEnter}
      />
    </div>
  );
};

export default Search;
