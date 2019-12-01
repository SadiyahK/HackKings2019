import React, { useState } from "react";
export default () => {
    return(
        <div className = "navbar" >
        <div className = "divFill">
        <ul>
        <li><a class="active" href="#search" className = "link">Home</a>
            <img src={require(`../images/search-icon.png`)} alt = "Logo" className="icon"/></li>
        <li><a href="#events"  className = "link">Events</a>
            <img src={require(`../images/calendar-icon.png`)} alt = "Logo" className="icon"/></li>
        <li><a href="#matchme"  className = "link">Match me!</a>
            <img src={require(`../images/paw-icon.png`)} alt = "Logo" className="icon"/></li>
        <li><a href="#profile"  className = "link">Search</a>
            <img src={require(`../images/person-icon.png`)} alt = "Logo" className="icon"/></li>
        </ul>
        </div>
        </div>
    )
}



