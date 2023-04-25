import React from "react";

const Repository = ({ repository }) => {
  return <li className="repo">{repository.name}</li>;
};

export default Repository;
