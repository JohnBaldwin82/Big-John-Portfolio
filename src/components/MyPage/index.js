import React from "react";
import MyPageContent from "../MyPageContent";
import MyPortfolio from "../MyPortfolio";
import About from "../About";
import MyContact from "../MyContact";
import Homepage from "../Homepage";
import MyResume from "../MyResume";


function renderMyPage({ currentPage }) {
  const rendPage = () => {
    console.log(currentPage.name);
    switch (currentPage.name) {
      case "About":
        return <About />;
      case "My Portfolio":
        return <MyPortfolio />;
      case "My Contact":
        return <MyContact />;
      case "My Resume":
        return <MyResume />;
      default:
        return <Homepage />;
    }
  };

  return (
    <section>
      <MyPageContent>{rendPage()}</MyPageContent>
    </section>
  );
}

export default renderMyPage;