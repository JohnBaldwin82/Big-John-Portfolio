import React from "react"

function MyHeader(props) {
  return (
    <header className="header">
      <h1>Big John Baldwin</h1>
      {props.children}
    </header>
  );
}

export default MyHeader;