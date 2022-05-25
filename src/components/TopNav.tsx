import React from "react";
import "../css/TopNav.css"

function TopNav() {
    return (
        <nav className="nav--top">
            <img className={"nav--top--img"} src={require("../images/logo512.png")} alt="master-to-things logo"/>
            <h1>
                Master To Things
            </h1>
        </nav>
    )
}

export default TopNav;
