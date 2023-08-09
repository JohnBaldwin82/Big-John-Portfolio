import React, { useState } from "react";
import MyProjects from "../MyProjects";

function MyPortfolio() {
  const [projects] = useState([
    {
      name: "Employee-Tracker",
      description: "Node, Inquirer, MySQL",
      repo: "https://github.com/JohnBaldwin82/Employee-Tracker",
    },
    {
      name: "Chat-Camp",
      description: "Node, Express, MySql, Socket-IO",
      repo: "https://github.com/JohnBaldwin82/Chat-Camp",
      link: "https://chat-camp.herokuapp.com/",
    },
    {
      name: "Food(d)-And-Bar",
      description: "CSS, Server-Side API's, java script",
      repo: "https://github.com/JohnBaldwin82/Food-And-Recipe-Generator",
    },
    {
      name: "Note-Taker",
      description: "Express",
      repo: "https://github.com/JohnBaldwin82/Note-Taker",
    },
    {
      name: "Text-Editor",
      description: "PWA, ",
      repo: "https://github.com/JohnBaldwin82/Text-Editor",
    },
    {
      name: "Work-Day-Schedule",
      description: "PWA, ",
      repo: "https://github.com/JohnBaldwin82/Work-Day-Schedule",
    },
  ]);

  return (
    <div className="MyPortfolio">
      <div className="flex-column">
        <div className="card">
          {projects.map((projects, idx) => (
            <MyProjects project={projects} key={"project" + idx} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyPortfolio;