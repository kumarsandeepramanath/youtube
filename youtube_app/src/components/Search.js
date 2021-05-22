import React, { useState } from 'react';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const search = (event) => {
    console.log(event.target.value);
    setSearchTerm(event.target.value);
  };
  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(event) => search(event)}
      ></input>
    </div>
  );
};

export default Search;
