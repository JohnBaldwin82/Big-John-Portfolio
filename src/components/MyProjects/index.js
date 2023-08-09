import React from "react";
import { removeHyphenThenCapitalize } from "../../utils/helpers";

function MyProjects({project}) {
  const { description, repo, link, name } = project;

  return (
    <div className="myProjects" key={name}>
      <img
        src={require(`../../assets/projects/${name}.png`)}
        alt={removeHyphenThenCapitalize(name)}
        className="myProjects"
      />

      <div className="myProject-text">
        <a href={link}>{removeHyphenThenCapitalize(name)}</a>
        <br/>
        <a href={repo}>
            {repo}
        </a>
        <br/>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default MyProjects;