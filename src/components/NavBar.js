import React from "react";
export default () => {
    return(
        <div className = "col-xs-12 col-md-12 col-lg-12 navbar" >
        <div className="divfill">
        <ul>
        <li><a class="active" href="../homePage" className = "link">Home<img src={require(`../images/paw-icon.png`)} alt = "Logo" className="icon"/></a>
            </li>
        <li><a href="../eventPage"  className = "link">Events<img src={require(`../images/calendar-icon.png`)} alt = "Logo" className="icon"/></a>
            </li>
        <li><a href="../MatchMe"  className = "link">Match me!<img src={require(`../images/person-icon.png`)} alt = "Logo" className="icon"/></a>
            </li>
        <li><a class="active" href="../searchPage" className = "link">Search<img src={require(`../images/search-icon.png`)} alt = "Logo" className="icon"/></a>
            </li>
        
        </ul>
        </div>
        </div>
    )
}



