import React from 'react';
import eventsList from "../data/eventsData";
import {Link} from "gatsby";
import Header from "../components/Header";

export default class eventPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
    };
    }
  
    render() {
            return (
                    <div>
                        <Header/>
                        {
                            eventsList.map(item => {
                                return (
                                    <div className="border-radius">
                                        <h2 className="text">{item.name}</h2>
        
                                        <h4 className="text-sub">Date: {item.date}</h4>
                                        <h4 className="text-sub">Start Time: {item.startTime}</h4>
                                        <h4 className="text-sub">Description: {item.description}</h4>
                                        <h4 className="text-sub">Address: {item.address}</h4>
                                        <Link to={"eventProfile?id="+item.eventId}>
                                            <button type="button" className="btn">More Info</button>
                                        </Link>                  
                                        </div>
                                )
                            })
                        }
                    </div>
                )
    }
  }