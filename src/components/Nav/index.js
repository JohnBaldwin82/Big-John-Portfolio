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
        {pages.map((Page) => (
          <a href={currentPage.name}> 
          <li
            className={`my-6 ${currentPage.name === Page.name && "navActive"}`}
            key={Page.name}
          >
            <span onClick={() => setCurrentPage(Page)}>
              {capitalize(Page.name)}
            </span>
          </li>
          </a>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;