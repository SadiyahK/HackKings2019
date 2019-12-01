import React, { useState } from "react";
import NavBar from "../components/NavBar";
export default () => {
    return(

        <div className = "col-xs-12 col-md-12 col-lg-12 header" id="container">
        <img src={require(`../images/rescu-logo.png`)} alt = "Logo" className="logo"/>
        <p>Rescuing U from loneliness 😄</p>
        <NavBar className = "navBar"/>
        </div>
    )
}
