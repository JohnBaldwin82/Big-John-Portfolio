import React from "react";
import mainImage from ''

function Homepage() {
    return (
        <div className='homepage row'>
            <div className='column-left'>
                <img src={mainImage} alt=''></img>
            </div>
            <div className="column-right">
                <h1>FullStack Web Developer</h1>
            </div>
        </div>
    )
}

export default Homepage