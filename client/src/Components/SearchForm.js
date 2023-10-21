// SearchForm.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SearchForm() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {

    
    
    axios.get('http://localhost:8000/api/search?searchValue=' + searchValue)
    .then(response => {
      console.log('Search Results:', response.data);
      setSearchResults(response.data);
    })
    .catch(error => {
      console.error(error);
    });
  };

  return (
    <div>
        <h1>saadad</h1>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search by title"
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        {searchResults.map(result => (
          <div key={result._id}>{result.title}</div>
        ))}
      </div>
    </div>
  );
}

export default SearchForm;
