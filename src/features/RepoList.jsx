import React from "react";
import List from "./List";

const RepoList = ({
  repoList,
  pageIndex,
  setPageIndex,
  totalPage,
  onFetchRepoContent,
  selectedRepo,
  setSelectedRepo,
}) => {
  console.log(totalPage, pageIndex);
  const onNextClick = () => {
    setPageIndex(pageIndex + 1);
  };

  const onPrevClick = () => {
    setPageIndex(pageIndex - 1);
  };

  return (
    <div className="repoListContainer">
      <h2>Respository List</h2>
      <ul className="repoList">
        {repoList.map((repo) => (
          <List
            key={repo.id}
            repository={repo}
            onClick={() => {
              setSelectedRepo(repo.name);
              onFetchRepoContent(repo.name);
            }}
          />
        ))}
      </ul>
      <div className="pagination">
        <button onClick={() => onPrevClick()} disabled={pageIndex <= 1}>
          Prev
        </button>
        <button>Page {pageIndex}</button>
        <button
          onClick={() => onNextClick()}
          disabled={pageIndex >= totalPage - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default RepoList;
