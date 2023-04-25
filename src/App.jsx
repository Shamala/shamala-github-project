import { useState } from "react";

import Search from "./features/Search";
import RepoList from "./features/RepoList";
function App() {
  const [search, setSearch] = useState("");
  const [repoList, setRepoList] = useState([]);
  const fetchRepos = async () => {
    const data = await fetch(`https://api.github.com/users/${search}/repos`);
    const response = await data.json();
    return response;
  };

  const onSearchRepos = () => {
    fetchRepos().then((response) => {
      setRepoList((prev) => response);
      // console.log(response);
    });
  };
  return (
    <>
      <div className="app">
        <header>
          <h1>GitHub Explorer</h1>
        </header>
        <main>
          <Search
            search={search}
            setSearch={setSearch}
            onSearchRepos={onSearchRepos}
          />
          <RepoList repoList={repoList} />
        </main>
        <footer></footer>
      </div>
    </>
  );
}

export default App;
