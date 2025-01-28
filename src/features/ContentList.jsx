import React from "react";
import List from "./List";

const ContentList = ({ repoName, contentList, onFetchRepoContent }) => {
  return (
    <div className="repoListContainer">
      <ul className="repoList">
        {contentList.map((content) => (
          <List
            key={content.name}
            repository={content}
            onClick={
              content.type === "dir"
                ? () => onFetchRepoContent(repoName, content.name)
                : null
            }
          />
        ))}
      </ul>
    </div>
  );
};

export default ContentList;
