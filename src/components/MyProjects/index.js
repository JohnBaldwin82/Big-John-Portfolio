import React from "react";
import { removeHyphenThenCapitalize } from "../../utils/helpers";

function MyProjects({ myProject }) {
  const { name, repo, link, description } = myProject;

  return (
    <div className="myProject" key={name}>
      <img
        src={require(`../../assets/projects/${name}.jpg`)}
        alt={removeHyphenThenCapitalize(name)}
        className="myProject"
      />

      <div className="myProject-text">
        <a href={link}>{removeHyphenThenCapitalize(name)}</a>
        {""}
        <a href={repo}>
            
        </a>

        <p>{description}</p>
      </div>
    </div>
  );
}

export default MyProjects;
