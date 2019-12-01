import React, { useState } from "react";
import NavBar from "../components/NavBar";
export default () => {
    return(
        <div className = "header" id="container">
        <h1>RescU</h1>
        <p>Rescuing U from loneliness :D</p>
        <NavBar className = "navBar"/>
        </div>
    )
}
