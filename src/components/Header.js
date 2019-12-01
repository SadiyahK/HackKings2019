import React, { useState } from "react";
import NavBar from "../components/NavBar";
export default () => {
    return(
        <div className = "header" id="container">
        <img src={require(`../images/rescu-logo.png`)} alt = "Logo" className="shelter-pic"/>
        <p>Rescuing U from loneliness :D</p>
        <NavBar className = "navBar"/>
        </div>
    )
}
