import React, { useEffect } from "react";
import { capitalize } from "../../utils/helpers";
// import renderMyPage from "../MyPage";
// const MyPage =

// function MyPage = {}

function Nav(props) {
  const { pages = [], setCurrentPage, currentPage } = props;

  useEffect(() => {
    document.title = capitalize(currentPage.name);
  }, [currentPage]);

  return (
    <nav className="nav">
      <ul className="flex-column">
        {pages.map((Page, index) => (
          <li
            className={`my-6 ${
              currentPage.name === Page.name ? "navActive" : ""
            }`}
            key={index}
          >
            <span onClick={() => setCurrentPage(Page)}>
              <a href={"#" + Page.name}> {capitalize(Page.name)}</a>
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
