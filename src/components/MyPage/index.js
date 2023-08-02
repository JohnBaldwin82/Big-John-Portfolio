import React from "react";
import MyPageContent from "../MyPageContent";
import MyPortfolio from "../MyPortfolio";
import About from "../About";
import MyContact from "../MyContact";
import Homepage from "../Homepage";
import MyResume from "../MyResume";

function MyPage({ currentPage }) {
  const renderMyPage = () => {
    switch (currentPage.name) {
      case "about me":
        return <About />;
      case "MyPortfolio":
        return <MyPortfolio />;
      case "MyContact":
        return <MyContact />;
      case "MyResume":
        return <MyResume />;
      default:
        return <Homepage />;
    }
  };

  return (
    <section>
      {/* <MyPageContent> */}
        {renderMyPage()}
      {/* </MyPageContent> */}
    </section>
  )
}

export default MyPage
