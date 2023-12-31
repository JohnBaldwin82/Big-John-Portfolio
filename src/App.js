import React, { useState } from "react";
import MyHeader from "./components/MyHeader";
import Nav from "./components/Nav";
import MyPage from "./components/MyPage";
import MyFooter from "./components/MyFooter";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [pages] = useState( [
    {
      name: "Homepage",
    },
    {
      name: "About",
    },
    {
      name: "My Portfolio",
    },
    {
      name: "My Contact",
    },
    {
      name: "My Resume",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div className="myApp">
      <MyHeader>
        <Nav
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Nav>
      </MyHeader>
      <main>
        <MyPage currentPage={currentPage}></MyPage>
      </main>
      <MyFooter/>
    </div>
  );
}

export default App;