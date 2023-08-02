import React from "react";

function myHeader(props) {
    return (
        <header className="header">
            <h1>Big John Baldwin</h1>
            {props.children}
        </header>
    )
}

export default myHeader