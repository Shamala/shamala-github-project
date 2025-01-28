import React from "react";

const List = ({ repository, onClick }) => {
  return (
    <li
      className={repository.type === "file" ? "file" : "dir"}
      onClick={onClick}
    >
      {repository.name}
    </li>
  );
};

export default List;
