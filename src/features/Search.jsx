import React from "react";

const Search = ({ search, setSearch, onSearchRepos }) => {
  return (
    <div className="searchComp">
      <input
        type="text"
        name="search"
        id="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Github User"
      />
      <button onClick={() => onSearchRepos()}>Explore</button>
    </div>
  );
};

export default Search;
