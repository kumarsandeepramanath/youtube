import React, { useState } from 'react';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const search = (event) => {
    //console.log(event.target.value);
    setSearchTerm(event.target.value);
  };
  return (
    <div className="search-bar ui segment">
      <form className="ui form">
        <div className="field">
          <label> Video Search</label>
          <input
            type="text"
            value={searchTerm}
            onChange={(event) => search(event)}
          ></input>
        </div>
      </form>
    </div>
  );
};

export default Search;
