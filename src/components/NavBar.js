import React from "react";
export default () => {
    return(
        <div className = "navbar" >
            <div className = "divFill">
                <ul>
                    <li><a class="active" href="../homePage" className = "link">Home</a>
                        <img src={require(`../images/person-icon.png`)} alt = "Logo" className="icon"/></li>
                    <li><a href="../eventPage"  className = "link">Events</a>
                        <img src={require(`../images/calendar-icon.png`)} alt = "Logo" className="icon"/></li>
                    <li><a href="../MatchMe"  className = "link">Match me!</a>
                        <img src={require(`../images/paw-icon.png`)} alt = "Logo" className="icon"/></li>
                    <li><a class="active" href="../searchPage" className = "link">Search</a>
                        <img src={require(`../images/search-icon.png`)} alt = "Logo" className="icon"/></li>
                
                </ul>
            </div>
        </div>
    )
}



