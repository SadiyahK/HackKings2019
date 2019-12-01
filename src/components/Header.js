import React, { useState } from "react";
import NavBar from "../components/NavBar";
export default () => {
    return(
        <div className = "col-xs-12 col-md-12 col-lg-12 header" id="container">
        <h1>RescU</h1>
        <p>Rescuing U from loneliness 😄</p>
        <NavBar className = "navBar"/>
        </div>
    )
}
