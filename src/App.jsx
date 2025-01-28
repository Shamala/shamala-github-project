import { useState } from "react";

import Search from "./features/Search";
import RepoList from "./features/RepoList";
import ContentList from "./features/ContentList";
function App() {
  const [search, setSearch] = useState("");
  const [paginatedRepoList, setPaginatedRepoList] = useState([]);
  const [contentList, setContentList] = useState([]);
  const [selectedRepo, setSelectedRepo] = useState("");
  const [pageIndex, setPageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const fetchRepos = async () => {
    const data = await fetch(`https://api.github.com/users/${search}/repos`);
    const response = await data.json();
    return response;
  };

  const fetchContents = async (selectedRepo, path) => {
    //Search Paramaeter changes if user edits input box
    const data = await fetch(
      `https://api.github.com/repos/${search}/${selectedRepo}/contents/${path}`
    );
    const response = await data.json();
    return response;
  };

  const clientSidePaginate = (response) => {
    let paginatedRepoList = [];
    if (response) {
      for (let i = 0; i < response.length; i = i + 5) {
        const end = i + 5 >= response.length ? response.length - 1 : i + 5;
        paginatedRepoList.push(response.slice(i, end));
      }
      setPaginatedRepoList(paginatedRepoList);
      setPageIndex(1);
    }
  };

  const onFetchRepoContent = async (repoName, path = "") => {
    const response = await fetchContents(repoName, path);
    console.log(response);
    setContentList(response);
  };

  const onSearchRepos = async () => {
    setIsLoading(true);
    setContentList([]);
    setSelectedRepo("");
    setPageIndex(0);
    setPaginatedRepoList([]);
    const response = await fetchRepos();
    clientSidePaginate(response);
    setIsLoading(false);
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
          {isLoading && <p> Loading Repo List</p>}

          {contentList.length > 0 ? (
            <ContentList
              repoName={selectedRepo}
              contentList={contentList}
              onFetchRepoContent={onFetchRepoContent}
            />
          ) : paginatedRepoList.length === 0 ? (
            <p></p>
          ) : (
            <RepoList
              repoList={paginatedRepoList[pageIndex]}
              pageIndex={pageIndex}
              setPageIndex={setPageIndex}
              totalPage={paginatedRepoList.length}
              onFetchRepoContent={onFetchRepoContent}
              selectedRepo={selectedRepo}
              setSelectedRepo={setSelectedRepo}
            />
          )}
        </main>
        <footer></footer>
      </div>
    </>
  );
}

export default App;
