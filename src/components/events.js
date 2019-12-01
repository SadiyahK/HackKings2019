import React from "react";
import eventsList from "../data/eventsData"

import {Link} from "gatsby";


export default ({eventsID}) => {
    return (
        <div>
            {
                eventsList.filter(item => item.eventId === eventsID).map(item => {
                    return (
                        <div>
                            <div className = "row margin-10 pad-5 bord">
                                <div className = "col-xs-3 col-md-3 col-lg-3">
                                    <img src={require(`../images/${item.image}`)} alt="Logo"  className = "aniPic"/>
                                </div>
                                    
                                <div class="vl"></div>
                                <div className = "col-xs-5 col-md-5 col-lg-5">
                                    <div className = "">
                                            <h3>Name: {item.name}</h3>  
                                    </div>
                                    
                                    <div className = "">
                                        <h3>Date: {item.startTime}</h3>
                                    </div>

                                    <div className = "">
                                        <h3>End Time: {item.endTime}</h3> 
                                    </div>
                                
                                    <div className = "">
                                        <h3>Description: {item.description}</h3> 
                                    </div>

                                    <Link to= {item.url} >
                                        <button type="button" className="btn">Find out more about us</button>
                                    </Link> 
                                
                                </div>

                        </div>
                        <div>
                                    <div>
                                        <h2 className = "margin-10"> You can find me at {item.address} ! </h2>
                                        <div className = "col-xs-11 col-md-11 col-lg-11 margin-10">
                                            <img src={require(`../images/${item.location}`)} alt="Logo"  className = "aniPic"/>
                                        </div>
                                    </div>
                        </div>
                    </div>
                    )
                })
            }
        </div>
    )
}