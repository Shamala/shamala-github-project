import React from "react";
import Repository from "./Repository";

const RepoList = ({ repoList }) => {
  return (
    <div className="repoListContainer">
      <h3>Respository List</h3>
      <ul className="repoList">
        {repoList.map((repo) => (
          <Repository key={repo.id} repository={repo} />
        ))}
      </ul>
    </div>
  );
};

export default RepoList;
